import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";
import OrderModal from "@/components/OrderModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kem Dưỡng Ẩm Beyond Angel Aqua | Cấp Ẩm Sâu 24H",
  description: "Trải nghiệm làn da ẩm mượt, căng mọng suốt 24h với Kem Dưỡng Ẩm Beyond Angel Aqua Moisture Cream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800 bg-teal-50/30 font-sans`}
      >
        <OrderProvider>
          {children}
          <OrderModal />
        </OrderProvider>
      </body>
    </html>
  );
}
