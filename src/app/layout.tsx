import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
})

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: {
    default: "Nexus Mart | Premium Online Shopping Destination",
    template: "%s | Nexus Mart",
  },
  description: "Discover exclusive tech gadgets, electronics, and daily essentials at Nexus Mart. Fast delivery and secure payments.",
  keywords: ["e-commerce", "electronics", "gadgets", "shopping", "Nexus Mart"],
  authors: [{ name: "Hridoy Chowdhury" }],
  openGraph: {
    title: "Nexus Mart | Premium Online Shopping",
    description: "Shop the latest electronics and gadgets at unbeatable prices.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        
        <main className="grow">
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
