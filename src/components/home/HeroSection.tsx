import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import heroImg from "@/assets/hero.jpg";
import heroImg from "@/assets/mainimg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effect
  const y = useTransform(scrollY, [0, 400], [0, 120]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Royal Orchid Palace exterior at night"
          className="w-full h-full object-cover"
        />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black-950/70 to-black/90" />
      </motion.div>

      {/* Blue Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="uppercase tracking-[0.5em] text-blue-400 text-sm md:text-lg mb-6"
        >
          Welcome to
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight mb-6"
        >
          Experience Luxury
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
            & Comfort
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl text-gray-300 text-[12px] md:text-sm leading-relaxed"
        >
          Discover unparalleled elegance at Prime Hub Pehar Kalan, NH 7,
          Rajpura, Punjab 140402. Welcome to Hotel Icon, Rajpura — where every
          moment is crafted to perfection. 
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 30px rgba(59,130,246,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-widest rounded-md transition-all duration-300 backdrop-blur-md"
        >
          Book Your Stay
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-blue-500 mt-2 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
