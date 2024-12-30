import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.scss";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Personal Finance",
  description: "Personal Finance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable}`}>{children}</body>
    </html>
  );
}
