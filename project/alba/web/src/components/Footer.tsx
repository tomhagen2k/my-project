export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tighter">d'Alba</h2>
            <p className="text-gray-500 text-sm">
              Thương hiệu mỹ phẩm cao cấp từ Hàn Quốc. Mang các sản phẩm chiết xuất từ thiên nhiên đến với làn da của bạn.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Công Ty TNHH Phân Phối d'Alba Việt Nam</li>
              <li>Tòa nhà X, Đường Y, Quận Z, TP. Hồ Chí Minh</li>
              <li>Hotline: 1900-xxxx</li>
              <li>Email: support@dalba.vn</li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#info" className="hover:text-pink-500 transition-colors">Về sản phẩm</a></li>
              <li><a href="#feedback" className="hover:text-pink-500 transition-colors">Đánh giá khách hàng</a></li>
              <li><a href="#promotion" className="hover:text-pink-500 transition-colors">Khuyến mãi</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Chính sách đổi trả</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Chính sách</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Hướng dẫn mua hàng</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} d'Alba Vietnam. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-6 h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" className="w-6 h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
