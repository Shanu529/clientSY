import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal
      gsap.from('.location-content > *', {
        scrollTrigger: {
          trigger: '.location-content',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Map reveal
      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 80%',
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Map parallax
      gsap.to(mapRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -30,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="location" 
      className="section-padding bg-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-gold-400/5 to-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            className="location-content"
            initial={{ opacity: 0, x: -60 }}
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
              📍 Prime Location
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark-900 mb-6 leading-tight">
              Steps From <span className="text-gradient-gold">Fremont Street</span>
            </h2>

            <p className="text-xl text-dark-600 mb-10 leading-relaxed font-light">
              Experience a contemporary hotel and casino destination offering excitement 
              for every visitor! Located just a minute walk away from Fremont Street, 
              The Downtown Grand offers a quieter respite from the Las Vegas Strip just 
              steps away from all the action.
            </p>

            {/* Contact Card */}
            <motion.div
              whileHover={{ 
                boxShadow: '0 25px 50px rgba(250, 204, 21, 0.15)',
                y: -5,
              }}
              className="bg-gradient-to-br from-gold-50 via-white to-gold-100/50 border-2 border-gold-200/50 p-8 rounded-3xl mb-8 transition-all"
            >
              <h3 className="text-2xl font-black text-dark-900 mb-6">Downtown Grand</h3>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-dark-900">206 N. 3rd Street</div>
                    <div className="text-dark-600">Las Vegas, NV 89101</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+18553847263"
                    className="font-bold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    (855) 384-7263
                  </a>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-dark-700">Open 24/7</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(250, 204, 21, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-lg px-10 py-5"
            >
              Get Directions
            </motion.button>
          </motion.div>

          {/* Map */}
          <motion.div
            ref={mapRef}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
          >
            {/* Map Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-900 flex items-center justify-center"
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>

              {/* Map pin marker */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <div className="relative">
                  {/* Pulse effect */}
                  <div className="absolute inset-0 w-20 h-20 bg-gold-400/30 rounded-full animate-ping" />
                  
                  {/* Marker */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-10 h-10 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Nearby attractions labels */}
              <div className="absolute top-6 left-6 right-6 flex justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl"
                >
                  <span className="text-xs font-bold text-dark-600 uppercase">Fremont Street</span>
                  <div className="text-sm font-bold text-dark-900">2 min walk</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl"
                >
                  <span className="text-xs font-bold text-dark-600 uppercase">The Strip</span>
                  <div className="text-sm font-bold text-dark-900">5 min drive</div>
                </motion.div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl"
              >
                <span className="font-bold text-dark-900">View on Google Maps</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
