/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-luxury-black/40 backdrop-brightness-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block"
          >
            Luxury Grooming for the Modern Man
          </motion.span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Elevate Your Style with <span className="italic block md:inline font-normal text-gold">GlowUp Men</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium barbering, classic shaves, and advanced skin care. Redefining the art of men's grooming in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="bg-gold text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold shadow-2xl transition-all"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white/20 transition-all"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50"
      >
        <div className="w-[1px] h-12 bg-cream/30 mx-auto" />
      </motion.div>
    </div>
  );
}
