import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-primary-black mb-6">Get in Touch</h1>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Please fill out the form below or reach out to us using the contact information provided.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary-gold" />
                <div>
                  <h3 className="font-semibold text-primary-black">Email</h3>
                  <p className="text-gray-600">contact@zuhurarabia.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary-gold" />
                <div>
                  <h3 className="font-semibold text-primary-black">Phone</h3>
                  <p className="text-gray-600">+971 4 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary-gold" />
                <div>
                  <h3 className="font-semibold text-primary-black">Address</h3>
                  <p className="text-gray-600">Dubai Mall, Downtown Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-gold focus:border-primary-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-gold focus:border-primary-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-gold focus:border-primary-gold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-black text-white py-3 rounded-md hover:bg-primary-gold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};