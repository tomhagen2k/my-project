import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Kem nền Mistine 30g 36H - Kiềm dầu không trôi",
  description: "Kem nền dạng lỏng Mistine phiên bản mới, kéo dài 24h, kiềm dầu bên ngoài, ức chế dầu bên trong. Lựa chọn hoàn hảo cho làn da mỏng manh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
