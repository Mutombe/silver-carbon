import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, 
  Home, Info, Layers, FolderOpen, Newspaper, 
  Sprout, Coins, Handshake, 
  Shield, FileText, Cookie, Mail 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

// --- Legal Content Placeholders ---
const LegalContent = ({ type }) => {
  if (type === 'privacy') return (
    <div className="space-y-4 text-slate-600">
      <p>At Silver Carbon, we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
      <h4 className="font-bold text-slate-900">1. Data Collection</h4>
      <p>We collect information you provide directly to us, such as when you fill out a contact form or request a newsletter.</p>
      <h4 className="font-bold text-slate-900">2. Usage</h4>
      <p>Your data is used to improve our services and communicate with you regarding project updates.</p>
    </div>
  );
  if (type === 'terms') return (
    <div className="space-y-4 text-slate-600">
      <p>By accessing this website, you agree to be bound by these Terms and Conditions.</p>
      <h4 className="font-bold text-slate-900">1. Intellectual Property</h4>
      <p>All content, including the Silver Carbon logo and assets, are the property of Silver Carbon.</p>
    </div>
  );
  return <div className="text-slate-600">Our website uses cookies to enhance user experience. By using our site, you consent to our use of cookies.</div>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServiceOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'} pacaembu-font`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
             <img src="/logo.png" alt="Silver Carbon" className="object-contain" />
          </div>
          <div className={`font-display font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
             <strong className="text-silver-blue">SILVER CARBON</strong>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-6 font-medium ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
          <Link to="/" className="flex items-center gap-2 hover:text-silver-blue transition-colors">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-silver-blue transition-colors">
            <Info size={18} />
            <span>About</span>
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-silver-blue transition-colors">
              <Layers size={18} />
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 w-64 flex flex-col gap-2">
                <Link to="/services/asset-development" className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-silver-blue transition-colors">
                   <Sprout size={18} />
                   <span>Asset Development</span>
                </Link>
                <Link to="/services/carbon-finance" className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-silver-blue transition-colors">
                   <Coins size={18} />
                   <span>Carbon Finance</span>
                </Link>
                <Link to="/services/carbon-offtake" className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-silver-blue transition-colors">
                   <Handshake size={18} />
                   <span>Credits Offtake</span>
                </Link>
                <div className="h-px bg-slate-100 my-1" />
                <Link to="/services" className="p-3 text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Layers size={16} /> View Overview
                </Link>
              </div>
            </div>
          </div>

          <Link to="/projects" className="flex items-center gap-2 hover:text-silver-blue transition-colors">
            <FolderOpen size={18} />
            <span>Projects</span>
          </Link>
          <Link to="/news" className="flex items-center gap-2 hover:text-silver-blue transition-colors">
            <Newspaper size={18} />
            <span>News</span>
          </Link>
          
          <Link to="/contact">
            <button className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 ${scrolled ? 'bg-slate-900 text-white hover:bg-gradient-to-r hover:from-silver-blue hover:to-silver-green' : 'bg-white text-slate-900 hover:bg-silver-blue hover:text-white'}`}>
              <Mail size={18} />
              <span>Contact Us</span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-medium text-slate-600">
              <Link to="/" className="flex items-center gap-3">
                <Home size={20} /> Home
              </Link>
              <Link to="/about" className="flex items-center gap-3">
                <Info size={20} /> About
              </Link>
              
              <button onClick={() => setIsServiceOpen(!isServiceOpen)} className="flex items-center justify-between w-full text-left">
                <span className="flex items-center gap-3"><Layers size={20} /> Services</span>
                <ChevronDown size={16} className={`transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServiceOpen && (
                 <div className="pl-4 flex flex-col gap-3 text-sm border-l-2 border-slate-100">
                    <Link to="/services/asset-development" className="flex items-center gap-2 p-2"><Sprout size={16} /> Asset Development</Link>
                    <Link to="/services/carbon-finance" className="flex items-center gap-2 p-2"><Coins size={16} /> Carbon Finance</Link>
                    <Link to="/services/carbon-offtake" className="flex items-center gap-2 p-2"><Handshake size={16} /> Credits Offtake</Link>
                 </div>
              )}
              
              <Link to="/projects" className="flex items-center gap-3">
                <FolderOpen size={20} /> Projects
              </Link>
              <Link to="/news" className="flex items-center gap-3">
                <Newspaper size={20} /> News
              </Link>
              <Link to="/contact" className="text-silver-blue font-bold flex items-center gap-3">
                <Mail size={20} /> Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(null); // 'privacy', 'terms', 'cookie'

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 pacaembu-font">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 brightness-0 invert" />
              <span className="font-display font-bold text-2xl">SILVER CARBON</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Where finance and sustainability converge for a greener future. Building tomorrow's sustainable legacy, today.
            </p>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>NRZ Complex, Seke Road, Harare, Zimbabwe</p>
              <p>+263 78 0049 196</p>
              <p>owen@silvercarbon.co.zw</p>
            </div>
          </div>

          {/* Company Links with Icons */}
          <div>
             <h4 className="font-bold text-lg mb-6 text-silver-blue">Company</h4>
             <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Info size={16} /> About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Layers size={16} /> Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <FolderOpen size={16} /> Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={16} /> Contact
                  </Link>
                </li>
             </ul>
          </div>

          {/* Legal Links with Icons */}
          <div>
             <h4 className="font-bold text-lg mb-6 text-silver-blue">Legal</h4>
             <ul className="space-y-4">
                <li>
                  <button onClick={() => setModalOpen('privacy')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Shield size={16} /> Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setModalOpen('terms')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <FileText size={16} /> Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => setModalOpen('cookie')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Cookie size={16} /> Cookie Policy
                  </button>
                </li>
             </ul>
          </div>
        </div>

        {/* Bottom Section with Credit */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Silver Carbon. All rights reserved.</p>
          
          {/* Developer Credit */}
          <p className="flex items-center gap-1">
            Created by 
            <a 
              href="https://bitstudio.co.zw" 
              target="_blank" 
              rel="noreferrer" 
              className="text-silver-blue hover:text-silver-green transition-colors font-medium"
            >
              Bit Studio
            </a>
          </p>
        </div>
      </div>

      <Modal isOpen={!!modalOpen} onClose={() => setModalOpen(null)} title={modalOpen?.charAt(0).toUpperCase() + modalOpen?.slice(1) + " Policy"}>
        <LegalContent type={modalOpen} />
      </Modal>
    </footer>
  );
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}