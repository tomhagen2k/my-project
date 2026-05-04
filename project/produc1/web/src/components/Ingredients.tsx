import React from 'react';
import Image from 'next/image';

export default function Ingredients() {
  const ingredients = [
    {
      name: 'Hyaluronic Acid',
      desc: 'Hỗn hợp 2 loại Hyaluronic acid cấp nước thanh lọc da, thúc đẩy tái tạo làn da mới.',
      image: '/image/generated/ingredient_ha.png'
    },
    {
      name: 'Tri-Sap Complex',
      desc: 'Phức hợp nhựa cây bạch dương, tre gai và nho bổ sung dưỡng chất tự nhiên, cấp ẩm làm dịu.',
      image: '/image/2.jpeg' // Using actual image that has nice organic vibe or similar
    },
    {
      name: 'Panthenol',
      desc: 'Dưỡng ẩm làm dịu da, phục hồi thương tổn đồng thời ngăn ngừa da mất nước.',
      image: '/image/8.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Sức Mạnh Từ Thiên Nhiên</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Khám phá công thức độc quyền với các thành phần an toàn và hiệu quả nhất cho làn da.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image src={ing.image} alt={ing.name} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-primary">{ing.name}</h3>
                <p className="text-slate-600">{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
