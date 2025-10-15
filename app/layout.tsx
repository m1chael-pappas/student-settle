import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Settle | International Student Support in Sydney",
  description: "Because the first week shouldn't be overwhelming. Expert support for international students settling into Sydney, Australia. Book your consultation today.",
  keywords: ["international students Sydney", "student settlement services", "Sydney student support", "new students Australia", "international student help"],
  authors: [{ name: "Student Settle" }],
  creator: "Student Settle",
  publisher: "Student Settle",
  metadataBase: new URL("https://studentsettle.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Student Settle | International Student Support in Sydney",
    description: "Because the first week shouldn't be overwhelming. Expert support for international students settling into Sydney, Australia.",
    url: "https://studentsettle.com.au",
    siteName: "Student Settle",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Settle | International Student Support in Sydney",
    description: "Because the first week shouldn't be overwhelming. Expert support for international students settling into Sydney.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
