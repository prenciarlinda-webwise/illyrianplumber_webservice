import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Blog - Tips & Advice",
  description: "Expert plumbing tips, maintenance advice, and DIY guides from the licensed plumbers at Illyrian Plumber. Learn how to prevent common plumbing problems.",
  keywords: [
    "plumbing blog",
    "plumbing tips",
    "plumbing advice",
    "DIY plumbing",
    "plumbing maintenance",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
