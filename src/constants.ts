/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'men-haircut',
    name: 'Precision Haircut',
    description: 'Expert fade, taper, or classic scissor cut tailored to your style by master barbers.',
    price: '₹500',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'beard-sculpting',
    name: 'Beard Sculpting',
    description: 'Complete beard shaping and grooming with hot towel finish and premium oils.',
    price: '₹350',
    image: 'https://images.unsplash.com/photo-1654097803253-d481b6751f29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'royal-shave',
    name: 'Royal Shave',
    description: 'Traditional straight razor shave with essential oils and a relaxing face massage.',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1573248291632-9a997c4e8183?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'skin-cleanup',
    name: 'Men\'s Skin Cleanup',
    description: 'Deep cleansing and exfoliation specifically designed for men\'s rugged skin.',
    price: '₹80',
    image: 'https://images.unsplash.com/photo-1590322739578-fb3d9ff41465?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'head-massage',
    name: 'Relaxing Head Massage',
    description: 'Ancient Ayurvedic techniques to relieve stress and improve blood circulation.',
    price: '₹200',
    image: 'https://plus.unsplash.com/premium_photo-1661628776646-e7d151b0d169?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'hair-coloring',
    name: 'Men\'s Hair Coloring',
    description: 'Natural-looking grey coverage or bold color transformations.',
    price: '₹1200',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Kapoor',
    rating: 5,
    text: 'Best grooming experience in the city. The royal shave is definitely a must-try!',
    image: 'https://i.pravatar.cc/150?u=male1',
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Premium atmosphere and very professional staff. My beard has never looked better.',
    image: 'https://i.pravatar.cc/150?u=male2',
  },
  {
    id: '3',
    name: 'Vikram Singh',
    rating: 5,
    text: 'GlowUp is the only place I trust for my haircuts. True master barbers.',
    image: 'https://i.pravatar.cc/150?u=male3',
  },
];

export const WHATSAPP_NUMBER = '7993148967'; // Indian Number Placeholder
