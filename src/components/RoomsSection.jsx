import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RoomsSection() {
  const sectionRef = useRef(null);
  const roomsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.rooms-title', {
        scrollTrigger: {
          trigger: '.rooms-title',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Room cards stagger
      gsap.from(roomsRef.current, {
        scrollTrigger: {
          trigger: '.rooms-grid',
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Image parallax
      roomsRef.current.forEach((room, index) => {
        gsap.to(room.querySelector('.room-image'), {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: room,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rooms = [
    {
      name: 'Gallery Tower',
      description: 'Contemporary accommodations with state-of-the-art amenities and modern furnishings',
      gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)',
      accentColor: 'from-blue-400 to-cyan-400',
      features: ['Modern Design', 'Latest Amenities', 'City Views'],
      price: 'From $125',
    },
    {
      name: 'Grand Tower',
      description: 'Classic collection of guest rooms featuring in-room essentials and premium views',
      gradient: 'linear-gradient(135deg, #5c4033 0%, #3d2817 100%)',
      accentColor: 'from-amber-400 to-yellow-400',
      features: ['Classic Elegance', 'Premium Service', 'Strip Views'],
      price: 'From $165',
    },
    {
      name: 'Master Suites',
      description: 'Luxurious suites with premium amenities for the ultimate Vegas experience',
      gradient: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      accentColor: 'from-gold-400 to-amber-400',
      features: ['Luxury Design', 'VIP Service', 'Penthouse Access'],
      price: 'From $250',
    },
  ];

  return (
    <section 
      id="rooms" 
      className="section-padding bg-white relative" 
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
      
      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block badge-luxury mb-6"
          >
            🏨 Luxury Accommodations
          </motion.span>
          
          <h2 className="rooms-title section-title mb-6">
            Rooms & Suites
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Choose from our collection of contemporary and classic accommodations
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="rooms-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              ref={el => roomsRef.current[index] = el}
              whileHover={{ 
                y: -20,
                boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
              }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.div
                  className="room-image absolute inset-0 w-full h-[120%]"
                  style={{ background: room.gradient }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Price Tag */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl"
                >
                  <span className="text-2xl font-black text-dark-900">{room.price}</span>
                  <span className="text-xs text-dark-500 block">/ night</span>
                </motion.div>

                {/* View Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${room.accentColor} bg-opacity-10 rounded-full mb-3`}>
                  <span className={`text-xs font-bold bg-gradient-to-r ${room.accentColor} bg-clip-text text-transparent uppercase tracking-wider`}>
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-dark-600 mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  {room.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-dark-700"
                    >
                      <span className={`w-2 h-2 bg-gradient-to-r ${room.accentColor} rounded-full mr-3`} />
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gold-600 font-bold hover:text-gold-700 transition-colors group/link"
                >
                  Explore Room
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
