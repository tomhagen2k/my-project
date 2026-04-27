import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { OrderModal } from "@/components/OrderModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Kem Nền Mistine Blue Shield 5.0 - Lớp Nền Hoàn Hảo Suốt 36H",
  description: "Trải nghiệm kem nền kiềm dầu không trôi 36H từ Mistine. Che phủ hoàn hảo, tự nhiên và nuôi dưỡng làn da. Đặt hàng ngay để nhận ưu đãi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <OrderModal />
      </body>
    </html>
  );
}
