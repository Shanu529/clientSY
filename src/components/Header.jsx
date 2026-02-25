import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate header elements on load
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, []);

  const navItems = [
    { name: 'ROOMS', href: '#rooms' },
    { name: 'DEALS', href: '#deals' },
    { name: 'POOL', href: '#pool' },
    { name: 'DINING', href: '#dining' },
    { name: 'CASINO', href: '#casino' },
    { name: 'EVENTS', href: '#events' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'power3.out' }}
            className="flex-shrink-0 cursor-pointer group"
          >
            <div className={`text-3xl md:text-4xl font-black tracking-[0.3em] transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent' 
                : 'text-white group-hover:text-gold-300'
            }`}>
              GRAND
            </div>
            <div className={`text-xs md:text-sm font-semibold tracking-[0.4em] transition-colors duration-300 ${
              isScrolled ? 'text-gold-500' : 'text-gold-400/80'
            }`}>
              HOTEL & CASINO
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: 'power3.out'
                }}
                whileHover={{ 
                  y: -2,
                  backgroundColor: isScrolled ? 'rgba(250, 204, 21, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                }}
                className={`nav-item relative px-5 py-3 text-sm font-bold tracking-wider transition-all duration-300 rounded-lg ${
                  isScrolled
                    ? 'text-gray-200 hover:text-gold-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(250, 204, 21, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-bold rounded-xl shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 text-sm uppercase tracking-wider"
          >
            <span>Book Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -8,
                }}
                className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all ${isScrolled ? 'bg-white' : 'bg-white'}`}
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current rounded-full transition-all ${isScrolled ? 'bg-white' : 'bg-white'}`}
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 8,
                }}
                className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all ${isScrolled ? 'bg-white' : 'bg-white'}`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden pb-6"
            >
              <motion.div
                className="bg-dark-950/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold-500/20 overflow-hidden"
              >
                <div className="p-4 space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      variants={itemVariants}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-6 py-4 text-white hover:text-gold-400 hover:bg-gold-500/10 font-bold text-sm tracking-wider transition-colors rounded-xl"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                
                <div className="p-4 pt-0">
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-bold rounded-xl shadow-gold-lg transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Book Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border gradient when scrolled */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        />
      )}
    </header>
  );
}
