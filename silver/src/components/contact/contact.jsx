import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-300 sm:text-4xl lg:text-5xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            We're here to help. Contact us using the information below or fill out the form.
          </motion.p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 overflow-hidden shadow rounded-lg p-6"
          >
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-base text-gray-500">+263 78 0049 196</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 overflow-hidden shadow rounded-lg p-6"
          >
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-base text-gray-500">owen@silvercarbon.co.zw</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-50 overflow-hidden shadow rounded-lg p-6"
          >
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                <p className="mt-1 text-base text-gray-500">
                  7 KingsRow, Northgate, Borrowdale, Harare, Zimbabwe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-12">
          <motion.iframe
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8235457451536!2d31.04656631500025!3d-17.82011758760981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a6922b7eda07%3A0xad7f582a9f18c3d7!2s7%20Kings%20Row%2C%20Northgate%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1682945600000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;