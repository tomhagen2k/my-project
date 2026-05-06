import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NIVEA Soft Crème - Da mịn màng không tì vết suốt 16h",
  description: "Trải nghiệm NIVEA Soft Crème, kem dưỡng ẩm toàn thân làm mềm da hiệu quả từ Đức.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
