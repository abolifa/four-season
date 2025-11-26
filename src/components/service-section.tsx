import { motion } from "framer-motion";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
  color?: string;
}

const ServiceSection = ({
  id,
  title,
  description,
  image,
  reversed = false,
  color = "rgba(42,44,111,0.9)",
}: ServiceSectionProps) => {
  return (
    <section
      id={id}
      dir="rtl"
      className={`relative w-full min-h-[90vh] flex flex-col md:flex-row overflow-hidden ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05, x: reversed ? 100 : -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className={`relative w-full md:w-1/2 border-t-[6px] md:border-t-0 ${
          reversed ? "md:border-l-[6px]" : "md:border-r-[6px]"
        }`}
        style={{ borderColor: color }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex items-center justify-center bg-background px-6 md:px-16 py-16 md:py-20"
      >
        <motion.div
          className="max-w-xl space-y-8 text-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          {/* Tag */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {id.toUpperCase()}
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            style={{ color }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-muted-foreground text-justify leading-relaxed text-base sm:text-lg"
          >
            {description}
          </motion.p>

          {/* Divider Line */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1 },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="h-[3px] w-20 origin-right bg-linear-to-r from-custom1 to-custom2 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
