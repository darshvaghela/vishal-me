import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const title = "Vishal Patadia · Ecosystem & Operations on Solana";
const description =
  "I build the rooms where Solana builders meet. Ex-Superteam global events (Superhosts), Solana Foundation DevRel, Solana Tour co-founder. Based in Ahmedabad.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL ? "https://imvishp.vercel.app" : "http://localhost:3000"),
  ),
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/images/london-demoday.jpg", width: 2000, height: 1333 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@imvishp",
    images: ["/images/london-demoday.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
