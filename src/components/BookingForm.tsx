/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES } from '../constants';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(5, 'Address is required'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      // Save to Firestore
      await addDoc(collection(db, 'bookings'), {
        ...data,
        createdAt: serverTimestamp(),
      });
      
      console.log('Booking saved to Firebase');
      
      // Also save to local storage as fallback/redundancy
      const bookings = JSON.parse(localStorage.getItem('growup_bookings') || '[]');
      bookings.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem('growup_bookings', JSON.stringify(bookings));

      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5F2ED', '#1A1A1A'],
      });

      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 5000);
    } catch (error) {
      console.error('Error saving booking:', error);
      setIsSubmitting(false);
      alert('There was an error processing your booking. Please try again.');
    }
  };

  return (
    <div className="section-padding">
      <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-cream text-luxury-black">
        {/* Info Panel */}
        <div className="lg:w-1/3 bg-gold p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">Gentleman's Choice</h2>
            <p className="text-white/80 leading-relaxed mb-12">
              Secure your spot with our master barbers. We recommend booking in advance for a premium grooming experience.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Call Us</div>
                  <div className="font-semibold">+1 (234) 567 890</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Open Hours</div>
                  <div className="font-semibold">Mon - Sat: 9am - 8pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="font-serif italic text-xl">"True beauty begins the moment you decide to be yourself."</div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="lg:w-2/3 p-12 relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.name.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <Phone size={14} /> Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all`}
                    placeholder="+1 234 567 890"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <Mail size={14} /> Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <MapPin size={14} /> Address
                  </label>
                  <input
                    {...register('address')}
                    type="text"
                    className={`w-full bg-white border ${errors.address ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all`}
                    placeholder="123 Beauty Lane"
                  />
                  {errors.address && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.address.message}</p>}
                </div>

                {/* Service */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60">Select Service</label>
                  <select
                    {...register('service')}
                    className={`w-full bg-white border ${errors.service ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name} - {s.price}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.service.message}</p>}
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <Calendar size={14} /> Preferred Date
                  </label>
                  <input
                    {...register('date')}
                    type="date"
                    className={`w-full bg-white border ${errors.date ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all`}
                  />
                  {errors.date && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.date.message}</p>}
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 flex items-center gap-2">
                    <Clock size={14} /> Preferred Time
                  </label>
                  <input
                    {...register('time')}
                    type="time"
                    className={`w-full bg-white border ${errors.time ? 'border-red-500' : 'border-luxury-black/10'} p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all`}
                  />
                  {errors.time && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.time.message}</p>}
                </div>

                {/* Notes */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60">Additional Notes</label>
                  <textarea
                    {...register('notes')}
                    rows={3}
                    className="w-full bg-white border border-luxury-black/10 p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all"
                    placeholder="Any special requirements?"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full bg-luxury-black text-white p-6 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Confirm Appointment'
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={64} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-luxury-black">Reservation Confirmed!</h3>
                <p className="text-luxury-black/60 mb-8 max-w-sm">
                  Your grooming session has been reserved. We'll send a confirmation to your phone shortly. See you soon, gentleman.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-gold font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
