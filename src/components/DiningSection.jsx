import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DiningSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.dining-title', {
        scrollTrigger: {
          trigger: '.dining-title',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: '.dining-grid',
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const restaurants = [
    {
      name: 'Triple George Grill',
      cuisine: 'Award-Winning Steakhouse',
      description: 'A San Francisco-style steakhouse in the heart of Sin City with a timeless atmosphere. Discover the perfect kick-start to a night full of fun.',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      badge: '⭐ Michelin Recommended',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      name: 'Grand Café',
      cuisine: 'Contemporary American',
      description: 'Modern dining experience featuring locally-sourced ingredients and innovative cuisine prepared by our award-winning chefs.',
      gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
      badge: '🏆 Top Rated',
      accent: 'from-teal-400 to-cyan-400',
    },
    {
      name: 'Citrus Bar & Lounge',
      cuisine: 'Craft Cocktails & Mixology',
      description: 'Sophisticated bar experience with premium spirits, signature cocktails, and vibrant atmosphere perfect for before or after your meal.',
      gradient: 'linear-gradient(135deg, #2d1f3d 0%, #614385 100%)',
      badge: '🍸 Artist Crafted',
      accent: 'from-purple-400 to-pink-400',
    },
  ];

  return (
    <section 
      id="dining" 
      className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />

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
            🍽️ World-Class Dining
          </motion.span>
          
          <h2 className="dining-title section-title mb-6">
            Eat & Drink
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Experience world-class dining at our award-winning restaurants
          </p>
        </motion.div>

        {/* Restaurant Cards */}
        <div className="dining-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              whileHover={{ 
                y: -15, 
                boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
              }}
              className="group rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full"
                  style={{ background: restaurant.gradient }}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px',
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 bg-gradient-to-r ${restaurant.accent} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {restaurant.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className={`text-sm font-bold bg-gradient-to-r ${restaurant.accent} bg-clip-text text-transparent mb-2 uppercase tracking-wider`}>
                  {restaurant.cuisine}
                </div>

                <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                  {restaurant.name}
                </h3>

                <p className="text-dark-600 mb-6 leading-relaxed">
                  {restaurant.description}
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-gold-600 font-bold hover:text-gold-700 transition-colors group/link"
                >
                  Make a Reservation
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary text-lg px-10 py-5"
          >
            View All Restaurants
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
