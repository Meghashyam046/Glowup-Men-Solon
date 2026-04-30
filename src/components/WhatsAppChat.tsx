/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { MessageCircle, Send, X, User, Calendar, CheckSquare, Scissors, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

type ChatStep = 'SERVICE' | 'NAME_PHONE' | 'DATE' | 'FINAL';

const SERVICES_OPTIONS = [
  'Precision Haircut',
  'Beard Sculpting',
  'Royal Shave',
  'Skin Cleanup',
  'Head Massage'
];

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>('SERVICE');
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    date: ''
  });

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setCurrentStep('NAME_PHONE');
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameInput = (e.target as any).userName.value;
    const phoneInput = (e.target as any).userPhone.value;
    if (nameInput && phoneInput) {
      setFormData({ ...formData, name: nameInput, phone: phoneInput });
      setCurrentStep('DATE');
    }
  };

  const handleDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateInput = (e.target as any).userDate.value;
    if (dateInput) {
      const finalData = { ...formData, date: dateInput };
      setFormData(finalData);
      
      // Construct WhatsApp Link
      const message = `Hello GlowUp Salon! I'd like to book an appointment.\n\n*Service:* ${finalData.service}\n*Name:* ${finalData.name}\n*Phone:* ${finalData.phone}\n*Date:* ${finalData.date}`;
      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');
      
      setIsOpen(false);
      // Reset for next time
      setTimeout(() => setCurrentStep('SERVICE'), 500);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <MessageCircle size={32} />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-luxury-black/5"
          >
            {/* Header */}
            <div className="bg-[#075e54] p-6 text-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Scissors size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold">GlowUp Assistant</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Online now</div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 bg-[#e5ddd5] min-h-[300px] flex flex-col gap-4">
              {/* Service Message */}
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm self-start max-w-[80%]">
                Welcome to GlowUp Salon! How can we help you today?
              </div>

              {currentStep === 'SERVICE' && (
                <div className="flex flex-col gap-2 mt-4">
                  {SERVICES_OPTIONS.map(service => (
                    <button
                      key={service}
                      onClick={() => handleServiceSelect(service)}
                      className="bg-white border border-luxury-black/10 p-3 rounded-xl text-sm font-semibold hover:bg-gold hover:text-white transition-all text-left flex items-center justify-between group"
                    >
                      {service}
                      <Send size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              {(currentStep === 'NAME_PHONE' || currentStep === 'DATE' || currentStep === 'FINAL') && (
                <div className="bg-gold text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm self-end">
                  I'd like a {formData.service}
                </div>
              )}

              {currentStep === 'NAME_PHONE' && (
                <>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm self-start max-w-[80%]">
                    Excellent choice! May I have your name and phone number to start the booking?
                  </div>
                  <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-2 mt-2">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-black/30" size={14} />
                      <input name="userName" required placeholder="Your Name" className="w-full text-sm p-3 pl-9 rounded-xl outline-none border border-luxury-black/10 focus:ring-1 focus:ring-gold" />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-black/30" size={14} />
                      <input name="userPhone" required placeholder="Phone Number" className="w-full text-sm p-3 pl-9 rounded-xl outline-none border border-luxury-black/10 focus:ring-1 focus:ring-gold" />
                    </div>
                    <button type="submit" className="bg-[#075e54] text-white p-3 rounded-xl font-bold text-sm shadow-lg">Next Step</button>
                  </form>
                </>
              )}

              {currentStep === 'DATE' && (
                <>
                  <div className="bg-gold text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm self-end">
                    I'm {formData.name}, call me at {formData.phone}
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm self-start max-w-[80%]">
                    Perfect, {formData.name.split(' ')[0]}. When would you like to visit us?
                  </div>
                  <form onSubmit={handleDateSubmit} className="flex flex-col gap-2 mt-2">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-black/30" size={14} />
                      <input name="userDate" type="date" required className="w-full text-sm p-3 pl-9 rounded-xl outline-none border border-luxury-black/10 focus:ring-1 focus:ring-gold" />
                    </div>
                    <button type="submit" className="bg-[#075e54] text-white p-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2">
                      Finish on WhatsApp <Send size={14} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
