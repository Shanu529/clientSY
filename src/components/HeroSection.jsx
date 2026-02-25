import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Initial reveal
      tl.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
      .from('.hero-title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-stats', {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.3')
      .from('.scroll-indicator', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.2');

      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Floating particles
      gsap.to('.floating-particle', {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        duration: 'random(3, 6)',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: 'random',
        },
      });

      // Text glow pulse
      gsap.to('.hero-title-glow', {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        scrollTrigger: {
          trigger: '.hero-stats',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="hero-bg absolute inset-0 w-full h-[120%]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%)`,
          }}
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(250, 204, 21, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(250, 204, 21, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold-400/10 rounded-full blur-[80px]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-gold-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hero-badge mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-gold-500/30 rounded-full">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gold-300 uppercase tracking-[0.2em]">
              ✨ 5-Star Luxury Experience
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] max-w-5xl">
          <span className="hero-title-line block">
            A VEGAS ESCAPE THAT'S
          </span>
          <span className="hero-title-line block text-gradient-gold hero-title-glow">
            DISTINCTLY DOWNTOWN
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed font-light">
          Experience contemporary luxury at the heart of downtown Las Vegas. 
          Just steps away from the iconic Fremont Street
        </p>

        {/* Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(250, 204, 21, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-dark-900 font-bold rounded-2xl shadow-gold-lg text-lg uppercase tracking-wider relative overflow-hidden group"
          >
            <span className="relative z-10">Book Your Escape Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl text-lg uppercase tracking-wider backdrop-blur-sm hover:border-gold-400/50 transition-all"
          >
            View Rooms
          </motion.button>
        </div>

        {/* Stats */}
        <motion.div
          className="hero-stats grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl"
        >
          {[
            { number: '500+', label: 'Luxury Rooms' },
            { number: '24', label: 'Bars & Dining' },
            { number: '4.9', label: 'Guest Rating' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="stat-number text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-white/60 text-xs uppercase tracking-[0.3em] mb-3">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-gold-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="w-1 h-8 bg-gradient-to-b from-gold-500 to-transparent rounded-full"
          />
        ))}
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="w-1 h-8 bg-gradient-to-b from-transparent to-gold-500 rounded-full"
          />
        ))}
      </div>
    </section>
  );
}
