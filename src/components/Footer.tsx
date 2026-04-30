/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scissors, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Scissors className="text-gold w-8 h-8" />
              <span className="font-serif text-3xl font-bold tracking-tight text-gold">GlowUp Men</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Excellence in men's barbering, traditional shaves, and premium grooming since 2011. Redefining the Indian gentleman's standards.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              {['Home', 'About Us', 'Our Services', 'Studio Gallery', 'Book Appointment', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Thu</span>
                <span className="text-cream/80">9am - 8pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Friday</span>
                <span className="text-cream/80">9am - 9pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-cream/80">10am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gold font-bold">Closed</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Join the Club</h4>
            <p className="text-sm text-cream/60 mb-6 font-light italic">
              Subscribe for exclusive beauty tips and special offers.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold/90 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-[11px] uppercase tracking-[0.2em] text-cream/30">
          © 2026 GlowUp Salon. All rights reserved. Crafting beauty, one soul at a time.
        </div>
      </div>
    </footer>
  );
}
