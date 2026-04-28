import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "d'Alba Waterfull Tone-up Sun Cream - Kem chống nắng nâng tông da",
  description: "Kem chống nắng nâng tông da d'Alba Waterfull Tone-up Sun Cream SPF 50+ PA++++. Bảo vệ da toàn diện, nâng tông trắng hồng rạng rỡ với thành phần thuần chay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 bg-white`}>
        <OrderProvider>
          {children}
        </OrderProvider>
      </body>
    </html>
  );
}
