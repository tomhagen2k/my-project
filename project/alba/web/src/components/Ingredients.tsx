"use client";

import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Nấm Truffle Trắng (Ý)",
    desc: "Thành phần cốt lõi tạo nên thương hiệu d'Alba. Được ví như 'kim cương trắng', cung cấp khoáng chất và axit amin dồi dào, giúp chống oxy hóa mạnh mẽ, mang lại làn da sáng bóng và trẻ trung.",
    img: "/ai_images/ingredient_truffle_1777387148867.png" // AI Generated
  },
  {
    name: "Chiết xuất Rau Má (Centella Asiatica)",
    desc: "Thành phần tự nhiên nổi tiếng với khả năng làm dịu da tức thì, phục hồi hàng rào bảo vệ da bị tổn thương bởi tia UV, giảm kích ứng hiệu quả.",
    img: "/ai_images/ingredient_centella_1777387162631.png" // AI Generated
  },
  {
    name: "Vitamin C & Hyaluronic Acid",
    desc: "Cung cấp dinh dưỡng, bảo vệ tế bào da. Đồng thời HA thủy phân cấp nước sâu, giúp da không bị khô căng dù tiếp xúc ánh nắng thời gian dài.",
    img: "/images/83f1edef-b1f3-43a6-86f7-ba8529f31f2d.jpeg" // Product image with texture
  }
];

export default function Ingredients() {
  return (
    <section className="py-20 bg-pink-50/20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Bí Mật Từ Thiên Nhiên
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sự kết hợp hoàn hảo giữa các thành phần thực vật cao cấp, an toàn và dịu nhẹ cho mọi loại da.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-pink-100/50 hover:shadow-xl transition-shadow border border-pink-50"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
