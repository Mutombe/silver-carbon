import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Leaf, Mail, MapPin, Phone } from 'lucide-react';

const FooterLink = ({ to, children }) => (
  <motion.li
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <Link 
      to={to} 
      className="text-base text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
    >
      {children}
    </Link>
  </motion.li>
);

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-green-900/40 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="inline-block group">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-8 h-8">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <img
                      src="/logo-sc.svg"
                      alt="Leaf"
                      className="w-full h-auto text-green-500"
                    />
                  </motion.div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Silver Carbon
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400 text-base max-w-sm">
              Where finance and sustainability converge for a greener future. Building tomorrow's sustainable legacy, today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <MapPin className="w-5 h-5" />
                <span>7 KingsRow, Northgate, Borrowdale, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+263 78 0049 196</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>owen@silvercarbon.co.zw</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-green-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink to="/about">About</FooterLink>
                  <FooterLink to="/services">Services</FooterLink>
                  <FooterLink to="/projects">Projects</FooterLink>
                  <FooterLink to="/contact">Contact</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-green-400 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink to="/blog">Blog</FooterLink>
                  <FooterLink to="/case-studies">Case Studies</FooterLink>
                  <FooterLink to="/faqs">FAQs</FooterLink>
                  <FooterLink to="/support">Support</FooterLink>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-green-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink to="/privacy">Privacy Policy</FooterLink>
                  <FooterLink to="/terms">Terms of Service</FooterLink>
                  <FooterLink to="/cookies">Cookie Policy</FooterLink>
                  <FooterLink to="/disclaimer">Disclaimer</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-12 pt-8 md:flex md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="border-t border-green-500/10 w-full pt-8">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Silver Carbon. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;