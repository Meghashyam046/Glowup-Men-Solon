/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}
