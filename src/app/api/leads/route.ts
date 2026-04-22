import { NextResponse } from "next/server";
import { BUSINESS_INFO } from "@/lib/constants";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  service: string;
  turnstileToken: string;
  pageUrl: string;
};

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Fail-open in dev if not configured; production should always have this set
  if (!token) return false;

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function insertLead(lead: LeadPayload, ip: string | null): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    console.warn("[leads] Supabase not configured — skipping DB insert");
    return;
  }

  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      message: lead.message || null,
      service: lead.service,
      page_url: lead.pageUrl,
      ip_address: ip,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Supabase insert failed: ${res.status} ${body}`);
  }
}

async function sendEmail(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.warn("[leads] Resend not configured — skipping email");
    return;
  }

  const subject = `New lead: ${lead.service} from ${lead.name}`;
  const text = [
    `New lead from ${BUSINESS_INFO.name} website`,
    ``,
    `Service:  ${lead.service}`,
    `Name:     ${lead.name}`,
    `Phone:    ${lead.phone}`,
    `Email:    ${lead.email}`,
    ``,
    `Message:`,
    lead.message || "(none)",
    ``,
    `Page URL: ${lead.pageUrl}`,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #b91c1c;">New Lead: ${escapeHtml(lead.service)}</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px;">${escapeHtml(lead.name)}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Phone</td><td style="padding: 8px;"><a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a></td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(lead.message || "(none)")}</td></tr>
        <tr><td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Page</td><td style="padding: 8px;"><a href="${escapeHtml(lead.pageUrl)}">${escapeHtml(lead.pageUrl)}</a></td></tr>
      </table>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend failed: ${res.status} ${body}`);
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(req: Request): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

export async function POST(req: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const service = String(body.service ?? "").trim();
  const turnstileToken = String(body.turnstileToken ?? "");
  const pageUrl = String(body.pageUrl ?? "").trim();

  if (!name || !phone || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (name.length > 200 || phone.length > 40 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Payload too long" }, { status: 400 });
  }

  const ip = getClientIp(req);

  const captchaOk = await verifyTurnstile(turnstileToken, ip);
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
  }

  const lead: LeadPayload = { name, phone, email, message, service, turnstileToken, pageUrl };

  try {
    await insertLead(lead, ip);
  } catch (err) {
    console.error("[leads] DB insert error:", err);
    // Continue to email — we'd rather deliver the lead than lose it entirely
  }

  try {
    await sendEmail(lead);
  } catch (err) {
    console.error("[leads] Email error:", err);
    return NextResponse.json(
      { error: "We saved your request but could not send the notification. We will still reach out." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
