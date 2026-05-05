import type { Metadata } from "next";
import { Inter, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Orange Loop AI — Kill Your AI Guilt",
  description:
    "AI Strategy Audits for business owners. Stop guessing where AI fits — get a clear, prioritized roadmap built specifically for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
        className="min-h-full"
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
