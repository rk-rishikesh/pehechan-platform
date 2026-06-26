import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/influencely/SiteFooter";
import { SiteHeader } from "@/components/influencely/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pehechan - Identity, Social Media & Digital Marketing Agency",
  description:
    "Pehechan builds identity, social media marketing, digital marketing, branding, and business consulting for doctors, founders, clinics, and brands.",
  icons: {
    icon: "/influencely/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
