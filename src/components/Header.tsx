"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS_INFO, NAV_LINKS, SERVICE_SILOS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-700 text-white py-1.5 text-xs">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-3">
            <a href={BUSINESS_INFO.phoneLink} className="flex items-center gap-1 hover:text-red-200 transition">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-red-300">|</span>
            <a href={BUSINESS_INFO.phone2Link} className="hidden sm:flex items-center gap-1 hover:text-red-200 transition">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}</span>
            </a>
            <span className="hidden md:inline text-red-300">|</span>
            <span className="hidden md:flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {BUSINESS_INFO.hours}
            </span>
          </div>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="hidden lg:flex items-center gap-1 hover:text-red-200 transition">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {BUSINESS_INFO.email}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/illyrian-plumber-logo.png"
                alt="Illyrian Plumber Corp - Licensed Plumber East Brunswick NJ"
                width={160}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="relative group">
                  {link.megaMenu ? (
                    <>
                      <Link href={link.href} className="flex items-center gap-1 text-gray-700 hover:text-red-700 font-medium text-sm transition py-4">
                        {link.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {/* Mega Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[800px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                        <div className="p-6">
                          <div className="grid grid-cols-5 gap-6">
                            {SERVICE_SILOS.map((silo) => (
                              <div key={silo.id}>
                                <span className="text-red-700 font-semibold text-sm block mb-3">
                                  {silo.title}
                                </span>
                                <ul className="space-y-1.5">
                                  {silo.services.slice(0, 5).map((service) => (
                                    <li key={service.href}>
                                      <Link href={service.href} className="text-gray-600 hover:text-red-700 text-xs block transition">
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={link.href} className="text-gray-700 hover:text-red-700 font-medium text-sm transition py-4 block">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="bg-red-700 hover:bg-red-800 text-white px-3 py-2 rounded-lg font-medium transition flex items-center gap-1.5 text-xs"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.phone2Link}
                className="bg-red-700 hover:bg-red-800 text-white px-3 py-2 rounded-lg font-medium transition flex items-center gap-1.5 text-xs"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.megaMenu ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex justify-between items-center py-2.5 text-gray-700 font-medium text-sm"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 border-l-2 border-red-700 ml-2 mb-2">
                          <Link
                            href="/services"
                            className="block py-2 text-red-700 font-medium text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            All Services
                          </Link>
                          {SERVICE_SILOS.map((silo) => (
                            <div key={silo.id} className="py-1.5">
                              <span className="text-gray-800 font-medium text-sm block mb-1">
                                {silo.title}
                              </span>
                              <div className="pl-2 space-y-1">
                                {silo.services.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block text-gray-600 text-xs hover:text-red-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2.5 text-gray-700 font-medium text-sm hover:text-red-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="block w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 rounded-lg font-medium text-center transition text-sm"
                >
                  Call {BUSINESS_INFO.phoneName}: {BUSINESS_INFO.phone}
                </a>
                <a
                  href={BUSINESS_INFO.phone2Link}
                  className="block w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 rounded-lg font-medium text-center transition text-sm"
                >
                  Call {BUSINESS_INFO.phone2Name}: {BUSINESS_INFO.phone2}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
