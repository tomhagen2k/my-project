import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 md:pb-16 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          <div className="md:w-1/3">
            <div className="mb-6 brightness-0 invert opacity-80">
              <Image src="/image/logo.png" alt="Beyond Logo" width={120} height={36} className="object-contain" />
            </div>
            <p className="text-sm mb-6 max-w-xs">Giải pháp chăm sóc da hoàn hảo từ thiên nhiên, đem lại vẻ đẹp rạng rỡ và tự tin mỗi ngày.</p>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3 text-sm">
              <li>📞 Hotline CSKH: <span className="text-white font-bold">1900-xxxx</span></li>
              <li>📧 Email: <span className="text-white">support@beyond-vn.com</span></li>
              <li>🏢 Địa chỉ: Thành phố Hà Nội</li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Chính Sách</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách đổi trả</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Beyond Vietnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
