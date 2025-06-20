import type { Metadata } from "next";
import { DM_Sans as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Brison's Moving & Junk Removal | Affordable Moving Services Near Alpharetta, GA",
  description:
    "Fast, reliable moving and junk removal services Near Alpharetta, GA. Offering local moves, cleanouts, and hauling with a personal touch. Contact Brison Culpepper for a free quote today!",
  openGraph: {
    title: "Brison's Moving & Junk Removal",
    description:
      "Fast, reliable moving and junk removal services Near Alpharetta, GA. Offering local moves, cleanouts, and hauling with a personal touch. Contact Brison Culpepper for a free quote today!",
    siteName: "Brison's Moving & Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
