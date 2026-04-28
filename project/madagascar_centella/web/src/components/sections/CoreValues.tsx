import { productData } from "@/lib/data";

export default function CoreValues() {
  return (
    <section id="thong-tin" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productData.coreValues.map((item, idx) => (
            <div key={idx} className="bg-brand-light p-6 rounded-3xl text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-green-dark mb-2">
                {item.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
