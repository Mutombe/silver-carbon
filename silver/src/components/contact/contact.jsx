import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink, Send, Loader2 } from "lucide-react";
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
                  NRZ Complex, Seke Road, Harare, Zimbabwe
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

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);

    setIsLoading(false);
    setIsOpen(false);
    setFormData({ name: '', email: '', message: '' });

    toast.success('Message sent successfully!', {
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
      style: {
        background: 'linear-gradient(to right, rgb(34 197 94), rgb(22 163 74))',
        color: 'white',
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        Get Started
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 text-white border border-green-500/20">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Let's Get Started
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Tell us about your sustainability goals and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/20 focus:border-green-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/20 focus:border-green-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your project or goals..."
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800 border-green-500/20 focus:border-green-500 text-white min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 
                hover:from-green-400 hover:to-green-500 text-white rounded-full 
                font-medium transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
