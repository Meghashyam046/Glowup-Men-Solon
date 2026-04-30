/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useRef } from 'react';

const GALLERY_IMAGES = [
  'https://plus.unsplash.com/premium_photo-1683133545092-f1e08e3e092b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1703792686658-24e62d626ed2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1659355751282-5ca7807af9e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="section-padding bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Our Gallery
          </h2>
        </div>
        <p className="max-w-md text-luxury-black/60 text-lg italic">
          Explore our premier establishment where tradition meets modern sophistication. The ultimate grooming experience for men.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x scroller-hide"
      >
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex-none w-[300px] md:w-[450px] aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl snap-center"
          >
            <img 
              src={img} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      {/* Manual Scroll Helper */}
      <div className="flex justify-center gap-4 mt-8">
        <div className="w-32 h-[1px] bg-gold/30 relative">
          <motion.div 
            animate={{ x: [0, 80, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-2px] w-8 h-1 bg-gold rounded-full" 
          />
        </div>
      </div>

      <style>{`
        .scroller-hide::-webkit-scrollbar {
          display: none;
        }
        .scroller-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
