"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <div className="text-2xl font-black text-white mb-4 tracking-wider">
            BEYOND
            <span className="text-[#4bb3e3]">.</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-sm">
            Mỹ phẩm chính hãng Hàn Quốc. Đánh thức vẻ đẹp tiềm ẩn của bạn với sức mạnh chữa lành từ thiên nhiên.
          </p>
          <div className="text-sm text-gray-500">
            © 2026 Beyond Official Store. All rights reserved.
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Liên Hệ</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-[#4bb3e3] shrink-0 mt-1" size={20} />
              <span>123 Đường Nguyễn Trãi, Quận Thanh Xuân, Thành phố Hà Nội</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#4bb3e3] shrink-0" size={20} />
              <span>1900-xxxx</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#4bb3e3] shrink-0" size={20} />
              <span>support@beyond.com.vn</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Liên Kết Nhanh</h4>
          <ul className="space-y-3">
            <li><a href="#thong-tin" className="hover:text-[#4bb3e3] transition-colors">Thông tin sản phẩm</a></li>
            <li><a href="#phan-hoi" className="hover:text-[#4bb3e3] transition-colors">Đánh giá khách hàng</a></li>
            <li><a href="#khuyen-mai" className="hover:text-[#4bb3e3] transition-colors">Ưu đãi hôm nay</a></li>
            <li><a href="#" className="hover:text-[#4bb3e3] transition-colors">Chính sách đổi trả</a></li>
            <li><a href="#" className="hover:text-[#4bb3e3] transition-colors">Điều khoản dịch vụ</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
