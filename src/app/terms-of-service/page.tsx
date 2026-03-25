import { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Illyrian Plumber Corp. Read our terms and conditions for plumbing services.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing our website or using the plumbing services provided by {BUSINESS_INFO.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              {BUSINESS_INFO.name} provides professional plumbing services including but not limited to:
            </p>
            <ul>
              <li>Emergency plumbing repairs</li>
              <li>Water heater installation and repair</li>
              <li>Boiler services</li>
              <li>Gas line installation and repair</li>
              <li>Plumbing inspections and maintenance</li>
              <li>Bathroom remodeling plumbing</li>
              <li>Whole house repiping</li>
            </ul>

            <h2>Service Area</h2>
            <p>
              We provide services in East Brunswick, NJ and surrounding areas in Middlesex County. Service availability may vary by location.
            </p>

            <h2>Pricing and Payment</h2>
            <ul>
              <li>We provide free estimates for most services</li>
              <li>Final pricing will be confirmed before work begins</li>
              <li>Payment is due upon completion of services unless otherwise agreed</li>
              <li>We accept cash, check, and major credit cards</li>
            </ul>

            <h2>Scheduling and Cancellation</h2>
            <p>
              We request at least 24 hours notice for appointment cancellations. Emergency services are available 24/7 and may be subject to additional fees.
            </p>

            <h2>Warranties and Guarantees</h2>
            <p>
              We stand behind our work and offer warranties on labor and parts as specified at the time of service. Warranty terms vary by service type and will be communicated at the time of service.
            </p>

            <h2>Limitations of Liability</h2>
            <p>
              {BUSINESS_INFO.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the cost of the services provided.
            </p>

            <h2>Property Access</h2>
            <p>
              By scheduling service, you authorize our technicians to access the areas of your property necessary to perform the requested services. You are responsible for ensuring safe and clear access to work areas.
            </p>

            <h2>Permits and Codes</h2>
            <p>
              We comply with all applicable New Jersey plumbing codes and regulations. When permits are required, we will inform you of any additional costs and timeline impacts.
            </p>

            <h2>Insurance and Licensing</h2>
            <p>
              {BUSINESS_INFO.name} is fully licensed and insured in the State of New Jersey. Our license number and insurance information are available upon request.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be subject to the laws of the State of New Jersey.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Phone: {BUSINESS_INFO.phone}</li>
              <li>Email: {BUSINESS_INFO.email}</li>
              <li>Address: {BUSINESS_INFO.address.full}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
