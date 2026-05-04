import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Kem Dưỡng Ẩm Beyond Angel Aqua Moisture Cream - Chính Hãng",
  description: "Kem dưỡng cấp ẩm sâu cho da, duy trì độ ẩm đến 24h. Phục hồi màng lipid, làm dịu da tức thì.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
