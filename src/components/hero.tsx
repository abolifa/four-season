"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

const mediaSequence = [
  { type: "image", src: "/hero-1.jpg", duration: 8 },
  { type: "video", src: "/videos/1.mp4", duration: 28 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((p) => (p + 1) % mediaSequence.length),
      mediaSequence[index].duration * 1000
    );
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = mediaSequence[index];

  if (showPromo) {
    return (
      <div className="fixed inset-0 bg-black z-99999 flex items-center justify-center">
        <button
          type="button"
          className="absolute top-6 right-6 z-999999 inline-flex gap-2 items-center justify-center rounded-full bg-black hover:bg-white/25 text-white p-2 backdrop-blur-md"
          onClick={() => setShowPromo(false)}
        >
          <X className="w-5 h-5" /> <span>تخطي العرض</span>
        </button>
        <video
          src="/videos/full-promo.mp4"
          className="w-full h-full object-contain md:object-cover"
          autoPlay
          playsInline
          controls={false}
          onEnded={() => setShowPromo(false)}
        />
      </div>
    );
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {current.type === "video" ? (
          <motion.video
            key={current.src}
            src={current.src}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ) : (
          <motion.div
            key={current.src}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.src})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/40" />

      <div className="relative z-10 w-full text-center px-6 flex flex-col items-center gap-4">
        <motion.img
          src="/logo-colored.png"
          alt="Modern Alraqi Logo"
          className="mx-auto w-56 md:w-96 h-auto mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <motion.a
            href="#about"
            className="px-10 py-4 rounded-full font-semibold text-white bg-[#ca3833] hover:bg-[#2a2c6f] transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(202,56,51,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="flex items-center gap-1">
              <span>إكتشف المزيد</span>
              <ChevronDown />
            </div>
          </motion.a>

          <motion.button
            type="button"
            className="px-10 py-4 rounded-full font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            onClick={() => setShowPromo(true)}
          >
            مشاهدة العرض التقديمي
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="mouse"
            className="absolute bottom-10 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-7 h-12 rounded-full border-2 border-white/70 flex justify-center items-start"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.div
                className="absolute top-2 w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
