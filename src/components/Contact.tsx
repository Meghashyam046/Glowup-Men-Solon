/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Contact() {

  return (
    <div className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Let's Create Your Perfect Look
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-none bg-cream rounded-2xl flex items-center justify-center text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Our Studio</h3>
                    <p className="text-luxury-black/60 text-sm leading-relaxed">
                      12, Indiranagar, 100 Feet Rd, <br />
                      Hal 2nd Stage, Indiranagar, <br />
                      Bengaluru, Karnataka 560038, India
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-none bg-cream rounded-2xl flex items-center justify-center text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-luxury-black/60 text-sm leading-relaxed font-bold">
                      +91 98XXXXXXXX <br />
                      +91 80XXXXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-none bg-cream rounded-2xl flex items-center justify-center text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-luxury-black/60 text-sm leading-relaxed">
                      hello@glowup-men.in <br />
                      bookings@glowup-men.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-luxury-black/5">
              <h4 className="font-serif text-xl font-bold mb-6">Follow Our Creations</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ y: -5, backgroundColor: '#D4AF37', color: '#FFF' }}
                    href="#"
                    className="w-12 h-12 rounded-full border border-luxury-black/10 flex items-center justify-center text-luxury-black/60 transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-auto border-8 border-cream grayscale hover:grayscale-0 transition-all duration-700"
          >
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9174620025!2d77.6412!3d12.9719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a301f25979%3A0xe5a3cbe8251e600!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714478323864!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
