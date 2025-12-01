"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("to", "info@watanalmajd.com.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      if (text.includes("OK")) {
        setStatus("✔ تم الإرسال بنجاح");
        form.reset();
      } else {
        setStatus("⚠ حدث خطأ أثناء الإرسال");
      }
    } catch {
      setStatus("⚠ فشل الاتصال بالخادم");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 bg-white text-gray-900 overflow-hidden"
      dir="rtl"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--secondary-color) 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-[url('/patterns/arabesque-grid.png')] opacity-[0.10]" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            تواصل <span className="text-[#F97316]">معنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لتلبية جميع احتياجات المصعد الخاص بك. اترك لنا رسالة أو
            تواصل مباشرة.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-20 h-1 bg-[#3B82F6] rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-3xl border border-[#3B82F6]/30 shadow-xl space-y-8"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#3B82F6]">
              معلومات الاتصال المباشر
            </h3>

            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex gap-3 items-start">
                <MapPin className="w-6 h-6 text-[#F97316] mt-1" />
                شارع سعدون السويحلي، مصراته - ليبيا
              </li>

              <li className="flex gap-3 items-start">
                <Phone className="w-6 h-6 text-[#F97316] mt-1" />
                <a href="tel:+218918821828" className="font-semibold" dir="ltr">
                  +218 91 882 1828
                </a>
              </li>

              <li className="flex gap-3 items-start">
                <Mail className="w-6 h-6 text-[#F97316] mt-1" />
                <a
                  href="mailto:info@fourseason.com.ly"
                  className="font-semibold"
                  dir="ltr"
                >
                  info@fourseason.com.ly
                </a>
              </li>
            </ul>

            <iframe
              className="w-full h-[250px] rounded-2xl border-4 border-[#F97316]/50"
              src="https://maps.google.com/maps?q=32.34940684639007,15.102771254035007&z=15&output=embed"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl border shadow-xl flex flex-col space-y-6"
          >
            <input
              name="name"
              required
              placeholder="الاسم الكامل"
              className="w-full border border-gray-300 rounded-xl p-3 focus:border-[#F97316] outline-none"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border border-gray-300 rounded-xl p-3 focus:border-[#F97316] outline-none"
            />
            <input
              name="phone"
              placeholder="رقم الهاتف"
              dir="ltr"
              className="w-full border border-gray-300 rounded-xl p-3 focus:border-[#F97316] outline-none"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="اكتب رسالتك هنا"
              className="w-full border border-gray-300 rounded-xl p-3 resize-none focus:border-[#F97316] outline-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold bg-[#F97316] hover:bg-orange-600 flex items-center justify-center gap-2"
            >
              إرسال الرسالة <Send className="w-5 h-5" />
            </button>
            <p className="text-center text-[#059669] font-bold text-lg">
              {status}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
