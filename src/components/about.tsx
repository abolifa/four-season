"use client";

import { motion } from "framer-motion";

import { Eye, Target, Sparkles, Building2 } from "lucide-react";

export default function AboutUs() {
  const primaryColor = "#F97316";
  const secondaryColor = "#3B82F6";

  return (
    <section
      id="about"
      className="relative py-40 bg-white text-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_65%)]" />
      <div className="absolute inset-0 bg-[url('/patterns/arabesque-grid.png')] opacity-[0.10]" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* --- Header --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold tracking-tight text-center mb-20 text-gray-900"
        >
          من نحن
        </motion.h2>

        {/* --- Logo & Vertical Separator --- */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-60 h-60 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center text-center text-xl font-bold tracking-tight p-4"
          >
            {/* The uploaded logo is used here */}
            <img
              src="/logo-icon.png"
              alt="شركة الأربع فصول للمصاعد"
              width={200}
              height={200}
              loading="eager"
              className="object-contain w-full h-full"
            />
            {/* Soft blue glow around the logo */}
            <div className="absolute w-full h-full rounded-full bg-blue-300/20 blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            // Vertical line in the center using the secondary color
            className={`absolute top-1/2 left-1/2 w-0.5 h-[520px] -translate-x-1/2 -translate-y-1/2 bg-linear-to-t from-transparent via-[${secondaryColor}]/40 to-transparent`}
          />
        </div>

        {/* --- Content Grid (Vision, Mission, Values, Distinction) --- */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {/* 1. Vision (R'uya) - Right Column on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pr-12 text-right border-r-4 border-r-gray-200 hover:border-r-[${primaryColor}] transition duration-300"
          >
            <Eye
              className={`absolute top-0 right-[-1.6rem] w-8 h-8 text-[${primaryColor}] bg-white p-1 rounded-full border-4 border-white`}
            />
            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              أن نكون الشركة الرائدة في تقديم حلول النقل العمودي، وأن يُعرف اسم
              **فور سيزون** كمرادف للجودة، الأمان، والتكنولوجيا المبتكرة في كل
              منشأة نخدمها.
            </p>
          </motion.div>

          {/* 2. Mission (Rissala) - Left Column on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-12 text-right border-l-4 border-l-gray-200 hover:border-l-[${primaryColor}] transition duration-300"
          >
            <Target
              className={`absolute top-0 left-[-1.6rem] w-8 h-8 text-[${primaryColor}] bg-white p-1 rounded-full border-4 border-white`}
            />
            <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              توفير أحدث أنظمة المصاعد والسلالم المتحركة العالمية، وتقديم خدمات
              التركيب والصيانة والترقية بمهنية عالية، لضمان أعلى مستويات الأداء
              التشغيلي والسلامة لعملائنا في جميع الأوقات.
            </p>
          </motion.div>

          {/* 3. Values (Qiyamuna) - Right Column on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pr-12 text-right border-r-4 border-r-gray-200 hover:border-r-[${primaryColor}] transition duration-300"
          >
            <Sparkles
              className={`absolute top-0 right-[-1.6rem] w-8 h-8 text-[${primaryColor}] bg-white p-1 rounded-full border-4 border-white`}
            />
            <h3 className="text-2xl font-bold mb-4">قيمنا الجوهرية</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              نلتزم بالنزاهة والشفافية في كل تعاملاتنا. نعتمد على **الابتكار
              التقني**، **الاستجابة السريعة**، و**الالتزام الصارم** بمعايير
              السلامة العالمية لتقديم حلول موثوقة وطويلة الأمد.
            </p>
          </motion.div>

          {/* 4. Distinction (Tamyzuna) - Left Column on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-12 text-right border-l-4 border-l-gray-200 hover:border-l-[${primaryColor}] transition duration-300"
          >
            <Building2
              className={`absolute top-0 left-[-1.6rem] w-8 h-8 text-[${primaryColor}] bg-white p-1 rounded-full border-4 border-white`}
            />
            <h3 className="text-2xl font-bold mb-4">لماذا الأربع فصول؟</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              نحن نجمع بين الخبرة الدولية في استيراد قطع الغيار والتكنولوجيا
              وبين **الفهم العميق للسوق المحلي**. هذا المزيج يضمن لك مصاعد ذات
              جودة عالمية ودعم فني يتميز بالسرعة والفعالية في الاستجابة.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
