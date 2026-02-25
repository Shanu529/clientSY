import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialGallery() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.gallery-title', {
        scrollTrigger: {
          trigger: '.gallery-title',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Images stagger animation with parallax
      imagesRef.current.forEach((img, index) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
          },
          y: 80,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const galleryItems = [
    { id: 1, gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)', icon: '🏨' },
    { id: 2, gradient: 'linear-gradient(135deg, #5c4033 0%, #3d2817 100%)', icon: '🍽️' },
    { id: 3, gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)', icon: '🏊' },
    { id: 4, gradient: 'linear-gradient(135deg, #2d1f3d 0%, #614385 100%)', icon: '🍸' },
    { id: 5, gradient: 'linear-gradient(135deg, #b20a2c 0%, #fffbd5 100%)', icon: '✨' },
    { id: 6, gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', icon: '🎰' },
  ];

  return (
    <section 
      id="gallery" 
      className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="container-custom">
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
            📸 Follow Us
          </motion.span>
          
          <h2 className="gallery-title section-title mb-6">
            Social Gallery
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Follow us <span className="text-gold-600 font-bold">@downtown_grand</span> on Instagram for more stunning moments and exclusive updates
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              ref={el => imagesRef.current[index] = el}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
                zIndex: 10,
              }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Background */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{ background: item.gradient }}
              />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 3px 3px, white 1px, transparent 0)`,
                    backgroundSize: '15px 15px',
                  }}
                />
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-8"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="text-5xl mb-3">{item.icon}</span>
                  <div className="flex items-center justify-center gap-2 text-white font-bold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                    @downtown_grand
                  </div>
                </motion.div>
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://instagram.com/downtown_grand"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(250, 204, 21, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 btn-primary text-lg px-10 py-5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
            Follow Us on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
