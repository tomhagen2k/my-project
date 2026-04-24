"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Sparkles, Clock, CheckCircle2, Star, ArrowRight, ChevronDown, X, Gift } from "lucide-react";
import OrderPopup from "@/components/OrderPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute -top-20 -right-20 -z-10 opacity-30 w-[600px] h-[600px] pointer-events-none mix-blend-multiply hidden lg:block">
           <Image 
            src="/images/shape-blob-1.png" 
            alt="" 
            fill 
            className="object-contain" 
            sizes="600px"
            loading="eager"
            priority
           />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--color-cerave-teal-light) text-(--color-cerave-teal) text-sm font-bold tracking-tight mb-8">
              <Sparkles className="w-4 h-4" />
              <span>GIẢI PHÁP SỐ 1 CHO DA DẦU MỤN</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-fluid-h1 font-display font-black text-slate-900 mb-8 tracking-tight">
              Sạch sâu ráo dầu.<br />
              <span className="text-premium">Không khô căng.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-fluid-p text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Sữa rửa mặt CeraVe Foaming Cleanser với công thức chứa 3 loại Ceramide thiết yếu và Niacinamide, giúp làm sạch sâu bã nhờn mà vẫn bảo vệ lớp màng ẩm tự nhiên của da.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="px-10 py-5 rounded-full bg-(--color-cerave-teal) text-white font-black text-lg hover:bg-slate-900 transition-all shadow-2xl shadow-(--color-cerave-teal)/30 flex items-center justify-center gap-3 active:scale-95"
              >
                Nhận ưu đãi & Quà tặng <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400 overflow-hidden relative">
                    <Image src={`/images/review-${(i % 3) + 1}.png`} alt="" fill className="object-cover grayscale" sizes="40px" />
                  </div>
                ))}
              </div>
              <p className="font-medium">Hơn <span className="font-bold text-slate-900">10,000+</span> khách hàng tin dùng</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-center py-12 lg:py-0"
          >
            {/* Hero Image - High Fidelity */}
            <div className="w-full max-w-[400px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] relative bg-white border border-white/50">
              <Image 
                src="/images/hero-main.png" 
                alt="Sản phẩm CeraVe Foaming Cleanser cao cấp" 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section className="border-y border-slate-200/40 bg-white/30 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-10">ĐƯỢC KHUYÊN DÙNG BỞI</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-xl font-display font-black text-slate-800 flex items-center gap-2 tracking-tight"><ShieldCheck className="w-5 h-5"/> HIỆP HỘI DA LIỄU</div>
            <div className="text-xl font-display font-black text-slate-800 tracking-tight">ELLE BEAUTY</div>
            <div className="text-xl font-display font-black text-slate-800 tracking-tight">VOGUE</div>
            <div className="text-xl font-display font-black text-slate-800 tracking-tight">COSMOPOLITAN</div>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-100">
             <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative shrink-0 shadow-inner bg-slate-50">
               <Image src="/images/dermatologist.png" alt="Bác sĩ da liễu" fill className="object-cover" sizes="150px" />
             </div>
             <div className="text-center sm:text-left">
               <p className="text-slate-600 text-lg font-medium italic mb-4 leading-relaxed">"Sữa rửa mặt CeraVe Da Dầu là lựa chọn hàng đầu tôi khuyên dùng cho bệnh nhân nhờ khả năng làm sạch sâu bã nhờn mà không phá hủy màng bảo vệ da."</p>
               <p className="text-(--color-cerave-teal) font-black text-sm tracking-widest uppercase">— DR. SARAH, CHUYÊN GIA DA LIỄU</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & AGITATION */}
      <section className="py-24 lg:py-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-8">Bạn đang bị mắc kẹt trong vòng lặp đổ dầu?</h2>
            <p className="text-lg text-slate-500 leading-relaxed">Sử dụng sữa rửa mặt có tính tẩy rửa mạnh làm mất đi lớp màng ẩm tự nhiên. Khi da khô, tuyến bã nhờn sẽ hoạt động mạnh hơn để bù đắp, dẫn đến tình trạng bóng dầu và nổi mụn nhiều hơn.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="relative w-full h-56 sm:h-72 rounded-3xl overflow-hidden mb-8 grayscale opacity-80">
                <Image src="/images/problem-dry-wash.png" alt="Da khô nứt nẻ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 500px" />
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900 mb-6">Sữa rửa mặt thông thường</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-slate-500">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5"><X className="w-3.5 h-3.5 text-red-400" /></div>
                  <span className="font-medium">Sạch "kin kít" nhưng làm tổn thương hàng rào bảo vệ da.</span>
                </li>
                <li className="flex items-start gap-4 text-slate-500">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5"><X className="w-3.5 h-3.5 text-red-400" /></div>
                  <span className="font-medium">Gây cảm giác khô rát, căng tức sau khi rửa.</span>
                </li>
                <li className="flex items-start gap-4 text-slate-500">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5"><X className="w-3.5 h-3.5 text-red-400" /></div>
                  <span className="font-medium">Kích thích tuyến bã nhờn tiết nhiều dầu hơn vào giữa ngày.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-(--color-cerave-teal) rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-(--color-cerave-teal)/20 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative w-full h-56 sm:h-72 rounded-3xl overflow-hidden mb-8 border border-white/20">
                <Image src="/images/texture-gel-foam.png" alt="Bọt gel mềm mịn" fill className="object-cover" sizes="(max-width: 768px) 100vw, 500px" />
              </div>
              <h3 className="text-2xl font-display font-black mb-6">CeraVe Sạch Sâu Da Dầu</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-emerald-300" /></div>
                  <span className="font-medium">Làm sạch sâu bụi bẩn, bã nhờn dịu nhẹ với dạng gel bọt mịn.</span>
                </li>
                <li className="flex items-start gap-4 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-emerald-300" /></div>
                  <span className="font-medium">Duy trì màng ẩm tự nhiên, da mềm mịn không căng rát.</span>
                </li>
                <li className="flex items-start gap-4 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-emerald-300" /></div>
                  <span className="font-medium">Kiểm soát lượng dầu thừa, hỗ trợ thu nhỏ lỗ chân lông.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES & BENEFITS (Z-Pattern) */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24">
            <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-6">Công thức khoa học phục hồi làn da</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Sự kết hợp hoàn hảo giữa các thành phần thiết yếu giúp làm sạch sâu mà không phá vỡ cân bằng tự nhiên của da.</p>
          </div>

          <div className="space-y-32 lg:space-y-48">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-(--color-cerave-teal-light) flex items-center justify-center text-(--color-cerave-teal) mb-8 shadow-sm">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-display font-black text-slate-900 mb-6 leading-tight">3 Ceramides Thiết Yếu (1, 3, 6-II)</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Ceramide chiếm 50% hàng rào bảo vệ da. CeraVe bổ sung trực tiếp 3 loại Ceramide thiết yếu giống hệt Ceramide tự nhiên, giúp phục hồi và củng cố hàng rào bảo vệ, ngăn ngừa tình trạng mất nước qua da.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="w-5 h-5 text-(--color-cerave-teal)"/> Giữ ẩm sâu từ bên trong</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="w-5 h-5 text-(--color-cerave-teal)"/> Ngăn chặn vi khuẩn xâm nhập</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 aspect-square rounded-[3rem] relative overflow-hidden shadow-2xl"
              >
                <Image src="/images/feature-ceramides.png" alt="3 Ceramides thiết yếu" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
              </motion.div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-[3rem] relative overflow-hidden shadow-2xl"
              >
                <Image src="/images/feature-niacinamide.png" alt="Tinh chất Niacinamide" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 shadow-sm">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-display font-black text-slate-900 mb-6 leading-tight">Niacinamide (Vitamin B3)</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Thành phần "vàng" cho làn da dầu mụn. Niacinamide có khả năng làm dịu da đáng kể, giảm thiểu các nốt mụn sưng đỏ, đồng thời kiểm soát lượng bã nhờn tiết ra, giúp lỗ chân lông luôn thông thoáng.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Điều tiết bã nhờn hiệu quả</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Làm dịu nốt mụn sưng đỏ</li>
                </ul>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-8 shadow-sm">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-display font-black text-slate-900 mb-6 leading-tight">Công nghệ phát hành chậm MVE</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Không giống như các sản phẩm thông thường, công nghệ độc quyền MVE bao bọc Ceramide trong các quả cầu siêu nhỏ, từ từ giải phóng dưỡng chất vào da liên tục suốt 24 giờ.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="w-5 h-5 text-amber-500"/> Da ẩm mượt suốt cả ngày</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="w-5 h-5 text-amber-500"/> Không bị khô căng khi ngồi điều hòa</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 aspect-square rounded-[3rem] relative overflow-hidden shadow-2xl"
              >
                <Image src="/images/feature-mve.png" alt="Công nghệ giải phóng chậm MVE" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 lg:py-40 bg-slate-50/50 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-6">Sự thay đổi ngoạn mục</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Được yêu thích bởi hàng triệu người dùng trên toàn thế giới.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { id: 1, name: "Minh Anh", type: "Da hỗn hợp thiên dầu", img: "/images/review-1.png", review: "Từ ngày chuyển sang CeraVe, da mình không còn bị bóng dầu vào giữa ngày nữa. Cảm giác rửa xong da sạch bong nhưng sờ lên vẫn mềm mịn rất thích. Lỗ chân lông cũng nhỏ hẳn đi!" },
              { id: 2, name: "Hà Trang", type: "Da dầu mụn", img: "/images/review-2.png", review: "Sữa rửa mặt chân ái của mình! Dùng 2 tuần thấy bã nhờn giảm rõ rệt, mụn viêm cũng xẹp nhanh hơn. Texture dạng gel tạo bọt rất êm, rửa xong không hề có cảm giác khô rát." },
              { id: 3, name: "Hoàng Tùng", type: "Da siêu dầu", img: "/images/review-3.png", review: "Là nam giới nên mình ưu tiên nhanh gọn. Em này làm sạch cực tốt, rửa xong da mát mẻ dễ chịu, kiềm dầu ổn đến chiều. Rất đáng đồng tiền bát gạo, sẽ mua lại." }
            ].map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-8 italic grow leading-relaxed">"{item.review}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                   <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white shadow-md">
                     <Image src={item.img} alt={item.name} fill className="object-cover" sizes="48px" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 tracking-tight">{item.name}</h4>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.type}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 lg:py-40 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
               <Image src="/images/lifestyle-washing.png" alt="Thư giãn rửa mặt với CeraVe" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-6">Câu hỏi thường gặp</h2>
                <p className="text-slate-500 text-lg">Giải đáp những thắc mắc phổ biến về chăm sóc da dầu mụn cùng CeraVe.</p>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Sản phẩm có làm khô da không?", a: "Hoàn toàn không. CeraVe Foaming Cleanser được thiết kế đặc biệt để làm sạch sâu bã nhờn mà không phá vỡ lớp màng ẩm tự nhiên của da nhờ 3 Ceramides thiết yếu." },
                  { q: "Da nhạy cảm có dùng được không?", a: "Có. Sản phẩm không chứa hương liệu, không cồn, không gây bít tắc lỗ chân lông và đã được kiểm nghiệm lâm sàng bởi các bác sĩ da liễu." },
                  { q: "Độ pH của sản phẩm là bao nhiêu?", a: "Sản phẩm có độ pH chuẩn 5.5, hoàn toàn phù hợp với độ pH tự nhiên của da, giúp da khỏe mạnh và hạn chế mụn." }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-slate-50 rounded-2xl border border-slate-200/60 overflow-hidden"
                  >
                    <button 
                      className="w-full px-6 py-5 flex items-center justify-between font-bold text-left text-slate-800 hover:bg-slate-100 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ml-4 ${activeFaq === index ? "rotate-180" : ""}`} />
                    </button>
                    {activeFaq === index && (
                      <div className="px-6 pb-6 text-slate-600 border-t border-slate-200/40 pt-5 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 lg:py-48 bg-(--color-cerave-teal) text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-display font-black mb-8 leading-tight">Sẵn sàng để có làn da sạch thoáng?</h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto">Chấm dứt nỗi ám ảnh da bóng dầu và mụn ngay hôm nay với giải pháp từ chuyên gia.</p>
          
          <div className="bg-white/10 p-8 sm:p-10 rounded-[3rem] backdrop-blur-xl border border-white/20 inline-flex flex-col sm:flex-row items-center sm:items-stretch gap-8 text-center sm:text-left mb-16 max-w-3xl w-full mx-auto shadow-2xl">
            <div className="w-48 h-48 sm:w-56 sm:h-auto aspect-square relative rounded-3xl overflow-hidden shrink-0 bg-white shadow-2xl">
              <Image src="/images/offer-gift.png" alt="Quà tặng mini size" fill className="object-cover p-4" sizes="250px" />
            </div>
            <div className="flex flex-col justify-center w-full">
               <h3 className="text-3xl font-display font-black text-white mb-3">Combo Phục Hồi Chuyên Sâu</h3>
               <p className="text-white/70 mb-6 text-lg">Sữa rửa mặt + Kem dưỡng CeraVe</p>
               <div className="flex items-baseline justify-center sm:justify-start gap-4 mb-8">
                 <span className="text-4xl font-black text-amber-300">GIẢM 20%</span>
                 <span className="text-xl line-through text-white/40">850.000đ</span>
               </div>
               <p className="text-sm font-bold inline-flex bg-amber-500/30 text-amber-200 py-3 px-5 rounded-2xl items-center justify-center sm:justify-start gap-3 border border-amber-500/20">
                 <Gift className="w-5 h-5 shrink-0"/> TẶNG THÊM 1 MINI-SIZE TRỊ GIÁ 95K
               </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="px-12 py-6 rounded-full bg-white text-(--color-cerave-teal) font-black text-xl hover:bg-slate-900 hover:text-white transition-all hover:scale-105 shadow-2xl shadow-black/30 w-full sm:w-auto"
            >
              ĐẶT HÀNG NGAY HÔM NAY
            </button>
          </div>
        </div>
      </section>

      <OrderPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
}
