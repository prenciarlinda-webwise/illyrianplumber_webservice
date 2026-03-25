import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Blog - Tips & Advice",
  description: "Expert plumbing tips, maintenance advice, and DIY guides from the licensed plumbers at Illyrian Plumber. Learn how to prevent common plumbing problems.",
  alternates: {
    canonical: "https://www.illyrianplumber.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
