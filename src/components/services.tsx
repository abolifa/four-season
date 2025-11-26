import { motion } from "framer-motion";
import ServiceSection from "./service-section";

const Service = () => {
  const primaryColor = "#F97316";
  const secondaryColor = "#3B82F6";

  return (
    <section
      id="services"
      className="relative w-full bg-white text-gray-900 overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,${primaryColor}14,transparent_70%)] pointer-events-none`}
      />
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,${secondaryColor}14,transparent_70%)] pointer-events-none`}
      />

      <div className="container mx-auto px-6 relative z-10 text-center py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          خدماتنا <span className={`text-orange-600`}>المتكاملة</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
        >
          نقدم حلولاً شاملة للنقل العمودي تشمل دورة حياة المصعد بالكامل، بدءاً
          من الاستيراد وحتى خدمات ما بعد البيع والدعم الفني المستمر.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "5rem", opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-8 mx-auto h-[3px] bg-[${primaryColor}] rounded-full`}
        />
      </div>

      <div className="relative z-10">
        <ServiceSection
          id="import"
          title="استيراد المصاعد عالية الجودة"
          description="نقوم باستيراد المصاعد الكاملة وأحدث المكونات الميكانيكية والإلكترونية من كبرى الشركات العالمية (أوروبا وآسيا)، مع ضمان جودة القطع وأصالتها."
          image="/services/1.avif"
          color={primaryColor}
        />

        <ServiceSection
          id="installation"
          title="التركيب والتشغيل الاحترافي"
          description="نتولى عملية تركيب المصاعد بالكامل وفقاً للمخططات الهندسية الصارمة ومعايير السلامة الدولية، لضمان تشغيل سلس وموثوق به من اليوم الأول."
          image="/services/2.webp"
          color={secondaryColor}
          reversed
        />

        <ServiceSection
          id="maintenance"
          title="صيانة المصاعد والدعم الفني"
          description="نوفر صيانة شاملة أو جزئية، ونقدم خدمة الطوارئ على مدار الساعة (24/7) من قبل فريق فني متخصص لتقليل وقت التوقف وضمان أعلى مستوى من الأمان."
          image="/services/3.jpg"
          color={primaryColor}
        />

        <ServiceSection
          id="modernization"
          title="التحديث والتطوير الشامل"
          description="نقوم بتحديث المصاعد القديمة واستبدال المكونات الأساسية بأخرى حديثة (مثل أنظمة التحكم والكابينة) لزيادة كفاءتها وتحسين مظهرها وتلبية معايير العصر."
          image="/services/4.jpg"
          color={secondaryColor}
          reversed
        />
      </div>
    </section>
  );
};

export default Service;
