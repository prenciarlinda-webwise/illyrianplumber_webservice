import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/illyrian-plumber-logo.png"
                alt="Illyrian Plumber Corp"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400">
              Your trusted plumbing experts serving New Jersey with 24/7 emergency services, quality workmanship, and guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/service-areas" className="text-gray-400 hover:text-white transition">Service Areas</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-lg font-semibold mb-4">Service Areas</p>
            <ul className="space-y-2">
              {BUSINESS_INFO.serviceAreas.slice(0, 6).map((area) => (
                <li key={area}>
                  <Link href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-white transition">
                    {area}, NJ
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-red-500 hover:text-red-400 transition font-medium">
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <ul className="space-y-4">
              <li>
                <a href={BUSINESS_INFO.phoneLink} className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-white">{BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.phone2Link} className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-white">{BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{BUSINESS_INFO.address.full}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-green-400">{BUSINESS_INFO.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. | Website & SEO by{" "}
              <a href="https://www.websiteandseoagency.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                Web Wise
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/sitemap-page" className="text-gray-400 hover:text-white transition">
                Sitemap
              </Link>
              <span className="text-gray-400">{BUSINESS_INFO.licenses.insured}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
