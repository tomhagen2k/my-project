export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-green mb-2">SKIN1004</h2>
            <p className="text-gray-400 text-sm mb-4">"Whatever touches the skin must be pristine."</p>
            <p className="text-sm text-gray-300">Công Ty TNHH SKIN1004 Việt Nam</p>
            <p className="text-sm text-gray-300">Địa chỉ: 123 Tôn Dật Tiên, Quận 7, TP. HCM</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-brand-orange">LIÊN HỆ HỖ TRỢ</h3>
            <p className="text-sm text-gray-300 mb-2">Hotline: <span className="font-bold">1900-8888</span></p>
            <p className="text-sm text-gray-300 mb-4">Email: support@skin1004vietnam.com</p>
            <div className="flex gap-4 text-sm">
              <a href="#thong-tin" className="hover:text-brand-green transition">Về sản phẩm</a>
              <a href="#phan-hoi" className="hover:text-brand-green transition">Đánh giá</a>
              <a href="#khuyen-mai" className="hover:text-brand-green transition">Ưu đãi</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} SKIN1004 Vietnam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
