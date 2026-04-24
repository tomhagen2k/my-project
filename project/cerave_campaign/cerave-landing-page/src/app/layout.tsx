import type { Metadata } from "next";
import { Be_Vietnam_Pro, Spectral } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700", "900"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CeraVe Sạch Sâu - Đánh Bay Dầu Nhờn, Phục Hồi Làn Da",
  description: "Sữa rửa mặt CeraVe Sạch Sâu cho da dầu – giải pháp làm sạch chuyên sâu kết hợp phục hồi hàng rào bảo vệ da với 3 loại Ceramides thiết yếu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnam.variable} ${spectral.variable} font-sans antialiased bg-slate-50 relative`}
      >
        <div className="blob blob-teal w-[600px] h-[600px] top-[-200px] left-[-200px]"></div>
        <div className="blob blob-blue w-[500px] h-[500px] top-[40%] right-[-150px]"></div>
        <div className="blob blob-teal w-[700px] h-[700px] bottom-[-200px] left-[10%]"></div>
        {children}
      </body>
    </html>
  );
}
