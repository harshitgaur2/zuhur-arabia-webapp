import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const CheckoutSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-8 flex items-center justify-center"
    >
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-primary-black mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you an email with your order details shortly.
        </p>
        <Link
          to="/products"
          className="inline-block bg-primary-black text-white px-6 py-3 rounded-full hover:bg-primary-gold transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </motion.div>
  );
};