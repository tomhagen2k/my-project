import Image from "next/image";

export default function TechIngredients() {
  const ingredients = [
    {
      title: "Chiết xuất Rau Má (Centella Asiatica)",
      desc: "Giàu Vitamin B, C và polyphenols. Làm dịu da mụn, giảm đỏ, chống oxy hóa và phục hồi hàng rào bảo vệ da.",
      img: "/images/ingredient_centella.png"
    },
    {
      title: "Niacinamide",
      desc: "Chất dưỡng trắng an toàn, điều tiết bã nhờn, bảo vệ da khỏi tác hại tia UV và ức chế melanin.",
      img: "/images/ingredient_niacinamide.png"
    },
    {
      title: "Công nghệ MadeWhite",
      desc: "Độc quyền giúp nâng tone tự nhiên, kiềm dầu suốt 24h, mang lại lớp finish ráo mịn.",
      img: "/images/ingredient_madewhite.png"
    }
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-dark mb-12">
          Sức Mạnh Từ <span className="text-brand-green-dark">Thiên Nhiên</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 md:h-72 w-full bg-brand-cream overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
