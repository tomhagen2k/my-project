import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/components/OrderContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kem Dưỡng Ẩm Beyond Angel Aqua - Cấp Ẩm Sâu 24H",
  description: "Giải pháp thanh lọc và làm dịu tức thì với phức hợp Tri-Sap Complex tự nhiên. Kem dưỡng Beyond Angel Aqua Moisture Cream 150ml.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background antialiased selection:bg-brand-light selection:text-brand">
        <OrderProvider>
          {children}
        </OrderProvider>
      </body>
    </html>
  );
}
