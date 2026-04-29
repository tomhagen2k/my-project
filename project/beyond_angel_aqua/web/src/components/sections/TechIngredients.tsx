"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechIngredients() {
  const ingredients = [
    {
      title: "Hyaluronic Acid Kép",
      desc: "Cấp nước thanh lọc da từ sâu bên trong, thúc đẩy tái tạo tế bào mới cho làn da ẩm mượt.",
      image: "/images/ai/ingredient_ha.png"
    },
    {
      title: "Phức Hợp Tri-Sap Complex",
      desc: "Nhựa cây bạch dương, tre gai và nhựa cây nho: Bổ sung nguồn dưỡng chất tự nhiên, cấp ẩm làm dịu da nhanh chóng.",
      image: "/images/ai/ingredient_tri_sap.png"
    },
    {
      title: "Chiết Xuất Thực Vật Ulleung",
      desc: "Được trồng 20.000 giờ tại đảo Ulleung Hàn Quốc, kết hợp Panthenol giúp phục hồi thương tổn và ngăn mất nước.",
      image: "/images/ai/ingredient_ulleung.png"
    }
  ];

  return (
    <section className="py-20 bg-[#f9fdfa]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase">
            Bí Quyết Từ Thiên Nhiên
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sự kết hợp hoàn hảo giữa công nghệ hiện đại và nguồn năng lượng thiên nhiên thuần khiết.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-72 w-full bg-gray-50">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 text-center bg-white relative z-10 -mt-6 rounded-t-[32px]">
                <h3 className="text-2xl font-bold text-[#4bb3e3] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
