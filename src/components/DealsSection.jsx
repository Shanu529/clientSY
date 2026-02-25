import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DealsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.deals-title', {
        scrollTrigger: {
          trigger: '.deals-title',
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
          trigger: '.deals-grid',
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Background parallax
      gsap.to('.deals-bg-shape', {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const deals = [
    {
      icon: '💰',
      title: 'Over $100 in Offers',
      description: 'Exclusive dining discounts and special perks await you',
      gradient: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
      hoverGradient: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)',
    },
    {
      icon: '🎫',
      title: 'BOGO Free Tickets',
      description: 'Get free museum tickets with your booking',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      hoverGradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    },
    {
      icon: '🅿️',
      title: 'Free Parking',
      description: 'Complimentary parking for all hotel guests',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      hoverGradient: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
    },
    {
      icon: '📶',
      title: 'Free WiFi',
      description: 'High-speed internet throughout the property',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      hoverGradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    },
  ];

  return (
    <section 
      id="deals" 
      className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decorative shapes */}
      <div className="deals-bg-shape absolute top-20 -left-32 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="deals-bg-shape absolute bottom-20 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

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
            ✨ Special Offers
          </motion.span>
          
          <h2 className="deals-title section-title mb-6">
            Choose Your Own Adventure
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Explore all our exclusive deals and special offers designed to make your stay unforgettable
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="deals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              whileHover={{ 
                y: -12,
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              }}
              className="group relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-100"
            >
              {/* Icon Circle with Gradient */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg"
                style={{ background: deal.gradient }}
              >
                {deal.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                  {deal.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {deal.description}
                </p>
              </div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full origin-left transition-transform duration-300"
              />

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-300/0 group-hover:border-gold-300/50 rounded-tr-xl transition-all duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-300/0 group-hover:border-gold-300/50 rounded-bl-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(250, 204, 21, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-lg px-12 py-5"
          >
            View All Special Deals
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
