'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  
 
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                   
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                   
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                 
                  required
                  className="h-32"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have a question or want to discuss your project? We'd love to
                  hear from you. Send us a message or use our contact information
                  below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Location Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const contactInfo = [
  {
    title: 'Email Us',
    content: 'info@interioz.com',
    icon: <Mail className="w-6 h-6 text-gray-600" />,
  },
  {
    title: 'Call Us',
    content: '(555) 123-4567',
    icon: <Phone className="w-6 h-6 text-gray-600" />,
  },
  {
    title: 'Visit Us',
    content: '123 Design Street, New York, NY 10001',
    icon: <MapPin className="w-6 h-6 text-gray-600" />,
  },
  {
    title: 'Working Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    icon: <Clock className="w-6 h-6 text-gray-600" />,
  },
];