import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIVEA Soft Crème - Kem Dưỡng Mềm Da Tối Ưu",
  description: "Kem dưỡng Nivea Soft Đức chiết xuất dầu Jojoba và Vitamin E, dưỡng ẩm toàn thân mềm mịn không bết dính. Mua ngay nhận ưu đãi 14%!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
