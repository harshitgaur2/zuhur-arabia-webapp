import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615639164213-aab04da93c7c?auto=format&fit=crop&q=80"
            alt="Luxury Perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Your Signature Scent
            </h1>
            <p className="text-xl text-white mb-8">
              Luxury Arabian perfumes for the distinguished
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-primary-gold text-primary-black px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              <span>Explore Collection</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-gold text-center mb-12">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Oriental', 'Floral', 'Woody'].map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&q=80`}
                  alt={category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};