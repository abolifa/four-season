"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSent(false);

    try {
      const response = await fetch("https://eratech.com.ly/fourseason.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }).toString(),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSent(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
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
        {/* --- Title --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            تواصل <span className="text-[#F97316]">معنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لتلبية جميع احتياجات المصعد الخاص بك. اترك لنا رسالة أو
            تواصل معنا مباشرة.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-20 h-1 bg-[#3B82F6] rounded-full"></span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full bg-gray-50 p-8 rounded-3xl border border-[#3B82F6]/30 shadow-xl" // Explicit Blue Border
          >
            <div className="flex-1 flex flex-col space-y-8 w-full h-full">
              {/* Info Header */}
              <div>
                <h3 className="text-3xl font-bold mb-4 text-[#3B82F6]">
                  معلومات الاتصال المباشر
                </h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="w-6 h-6 text-[#F97316] shrink-0 mt-1" // Explicit Orange
                    />
                    <span>شارع سعدون السويحلي، مصراته - ليبيا</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      className="w-6 h-6 text-[#F97316] shrink-0 mt-1" // Explicit Orange
                    />
                    <a
                      href="tel:+218918821828"
                      className="font-semibold hover:text-gray-900 transition-colors"
                      dir="ltr"
                    >
                      +218 91 882 1828
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#F97316] shrink-0 mt-1" />
                    <a
                      href="mailto:info@fourseason.com.ly"
                      className="font-semibold hover:text-gray-900 transition-colors"
                      dir="ltr"
                    >
                      info@fourseason.com.ly
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex-1 min-h-[250px]">
                <iframe
                  title="Map Location"
                  className="w-full h-full rounded-2xl border-4 border-[#F97316]/50"
                  src="https://maps.google.com/maps?q=32.34940684639007,15.102771254035007&z=15&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* 2. Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full justify-between bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6"
          >
            <div className="flex-1 space-y-6">
              {/* Input: Name */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  الاسم الكامل
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white text-gray-900 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:border-[#F97316] focus:ring-[#F97316] transition-colors"
                />
              </div>

              {/* Input: Email */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  البريد الإلكتروني
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white text-gray-900 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:border-[#F97316] focus:ring-[#F97316] transition-colors"
                />
              </div>

              {/* Input: Phone */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  رقم الهاتف
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white text-gray-900 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:border-[#F97316] focus:ring-[#F97316] transition-colors"
                  dir="ltr" // Keep phone number LTR
                />
              </div>

              {/* Input: Message */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  الرسالة / تفاصيل المشروع
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white text-gray-900 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:border-[#F97316] focus:ring-[#F97316] transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className={`w-full py-4 font-bold rounded-xl text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                loading
                  ? "bg-gray-400 cursor-wait"
                  : "bg-[#F97316] hover:bg-orange-600" // Explicit Orange BG
              }`}
              style={{
                boxShadow: `0 4px 15px #F9731666`, // Custom shadow
              }}
            >
              {loading ? (
                "جاري الإرسال..."
              ) : sent ? (
                "✅ تم الإرسال بنجاح"
              ) : error ? (
                "حدث خطأ! حاول مجددًا"
              ) : (
                <>
                  إرسال الرسالة <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
