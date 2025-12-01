"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "مبنى المنطقة الحرة - مصراتة",
    image: [
      "/projects/1/1.jpg",
      "/projects/1/2.jpg",
      "/projects/1/3.jpg",
      "/projects/1/4.jpg",
    ],
    place: "مصراتة",
  },
  {
    title: "مول ديفاكتو - طرابلس",
    image: [
      "/projects/2/1.jpg",
      "/projects/2/2.jpg",
      "/projects/2/3.jpg",
      "/projects/2/4.jpg",
    ],
    place: "طرابلس",
  },
  {
    title: "مبنى تجاري 8 طوابق - منطقة طبالينو",
    image: ["/projects/4/1.jpg"],
    place: "بنغازي",
  },
  {
    title: "البوابة الذكية - المنطة الحرة",
    image: ["/projects/3/1.jpg", "/projects/3/2.jpg", "/projects/3/3.jpg"],
    place: "مصراتة",
  },
  {
    title: "مبنى خدمي - غريان",
    image: [
      "/projects/5/1.jpg",
      "/projects/5/2.jpg",
      "/projects/5/3.jpg",
      "/projects/5/4.jpg",
    ],
    place: "غريان",
  },
  {
    title: "مبنى وزارة العدل - فرع مصراتة",
    image: ["/projects/6/1.jpg"],
    place: "مصراتة",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  const show = (index: number) => {
    setCurrentProject(index);
    setCurrentImg(0);
    setOpen(true);
  };

  const next = useCallback(() => {
    const images = projects[currentProject].image;
    setCurrentImg((p) => (p + 1) % images.length);
  }, [currentProject]);

  const prev = useCallback(() => {
    const images = projects[currentProject].image;
    setCurrentImg((p) => (p - 1 + images.length) % images.length);
  }, [currentProject]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, next, prev]);

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#0c0f1a] text-white overflow-hidden"
      dir="rtl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-16 tracking-widest z-20 relative"
      >
        بعض أعمالنا المميزة
      </motion.h2>

      <div className="absolute inset-0 opacity-[1] z-10 bg-[url('/patterns/arabesque-grid.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => show(i)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-[#141827] border border-white/10 shadow-xl shadow-black/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.55)] transition-all duration-500"
            >
              <div className="overflow-hidden h-[230px]">
                <img
                  src={Array.isArray(p.image) ? p.image[0] : p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-orange-400">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-99999 flex items-center justify-center"
          >
            <img
              src={projects[currentProject].image[currentImg]}
              className="max-h-[85vh] max-w-[90vw] object-contain select-none"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full"
            >
              <X size={28} />
            </button>

            {projects[currentProject].image.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute right-10 text-white/80 hover:text-white p-3"
                >
                  <ChevronRight size={40} />
                </button>
                <button
                  onClick={next}
                  className="absolute left-10 text-white/80 hover:text-white p-3"
                >
                  <ChevronLeft size={40} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
