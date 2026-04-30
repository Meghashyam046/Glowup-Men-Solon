/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Happy Customers', value: '10K+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Services Completed', value: '50K+' },
  ];

  return (
    <div className="section-padding bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://t4.ftcdn.net/jpg/03/57/71/37/240_F_357713787_GcYqwQKLWUdj0unyZTWYbllIW7776MAD.jpg" 
              alt="Salon Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/2 -left-8 -translate-y-1/2 hidden md:block">
            <div className="bg-gold text-white p-8 rounded-2xl shadow-xl rotate-[-5deg]">
              <span className="text-4xl font-serif font-bold block">15+</span>
              <span className="text-xs uppercase tracking-widest opacity-80">Years Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Our Heritage</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Gentleman's Standard Since 2011
          </h2>
          <div className="space-y-6 text-luxury-black/70 leading-relaxed text-lg mb-12">
            <p>
              At GlowUp Men, we believe that grooming is more than just a haircut—it's a tradition. Our studio is a sanctuary for the modern man who values quality, precision, and a moment of calm in a busy world.
            </p>
            <p>
              Our master barbers are experts in classic and contemporary techniques, using exclusive grooming products imported and locally sourced across India. Every service is a masterclass in detail and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <div className="text-3xl font-serif font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-luxury-black/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
