import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary-black mb-6">Our Story</h1>
            <p className="text-gray-600 mb-4">
              Founded in the heart of Arabia, Zuhur Arabia brings centuries-old perfumery traditions to the modern world. Our journey began with a passion for creating unique fragrances that tell stories of ancient trade routes and exotic destinations.
            </p>
            <p className="text-gray-600 mb-4">
              Each fragrance is carefully crafted using the finest ingredients, from precious oud to delicate rose petals, creating an olfactory experience that transcends time and culture.
            </p>
            <p className="text-gray-600">
              Our commitment to quality and authenticity has made us a trusted name in luxury perfumes, serving distinguished clients who appreciate the art of fine fragrance.
            </p>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1583916087061-c81f3590e1fb?auto=format&fit=crop&q=80"
              alt="Our Story"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-black mb-4">Our Mission</h3>
            <p className="text-gray-600">To create exceptional fragrances that capture the essence of Arabian luxury and tradition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-black mb-4">Quality</h3>
            <p className="text-gray-600">We source only the finest ingredients from trusted suppliers worldwide.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-black mb-4">Heritage</h3>
            <p className="text-gray-600">Blending traditional Arabian perfumery with modern sophistication.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};