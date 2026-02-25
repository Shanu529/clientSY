import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PoolSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: -80,
        ease: 'none',
      });

      // Content reveal
      gsap.from('.pool-content > *', {
        scrollTrigger: {
          trigger: '.pool-content',
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Features stagger
      gsap.from('.pool-feature', {
        scrollTrigger: {
          trigger: '.pool-features',
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: '🏖️', text: 'Plush Poolside Cabanas', desc: 'Private retreats with dedicated service' },
    { icon: '🎵', text: 'Live DJ Performances', desc: 'Weekend beats by top DJs' },
    { icon: '🍹', text: 'Premium Bar Service', desc: 'Craft cocktails & refreshments' },
    { icon: '🌴', text: 'Daytime Entertainment', desc: 'Games, music & fun' },
  ];

  return (
    <section 
      id="pool" 
      className="section-padding bg-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-gold-400/5 to-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'power3.out' }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            {/* Gradient Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700"
            />

            {/* Wave Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" fill="white" fillOpacity="0.1" />
                <path d="M0 60 Q 25 40 50 60 T 100 60 V 100 H 0 Z" fill="white" fillOpacity="0.1" />
              </svg>
            </div>

            {/* Animated water effect */}
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating elements */}
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 right-10 text-6xl opacity-30"
            >
              🏊
            </motion.div>

            {/* Pool info badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-dark-900">Pool Open Daily</span>
                </div>
                <span className="text-sm text-dark-600">9AM - 10PM</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="pool-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'power3.out' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block badge-luxury mb-6"
            >
              🏊 Luxury Pool Experience
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark-900 mb-6 leading-tight">
              Citrus Grand <span className="text-gradient-gold">Pool Deck</span>
            </h2>
            
            <p className="text-xl text-dark-600 mb-10 leading-relaxed font-light">
              Find your spot in the sun at the chic and sleek Citrus Grand Pool Deck. 
              With plush poolside cabanas, live DJ performances, and more, this is your 
              go-to for a daytime party filled with unforgettable memories.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pool-features">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8, backgroundColor: 'rgba(250, 204, 21, 0.05)' }}
                  className="pool-feature flex items-center gap-4 p-4 bg-gray-50 rounded-2xl transition-colors cursor-pointer"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <div className="font-bold text-dark-900">{feature.text}</div>
                    <div className="text-sm text-dark-500">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(250, 204, 21, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-lg px-10 py-5"
            >
              Reserve Your Cabana Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
