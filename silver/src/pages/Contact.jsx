import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Map, Clock } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '../components/SEO';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const formData = new FormData(e.target);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Sending message...',
        success: 'Message sent successfully! We will get back to you soon.',
        error: 'Failed to send message. Please try again.',
      }
    );
    e.target.reset();
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Silver Carbon for partnership opportunities." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-silver-dark text-white pacaembu-font overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-silver-dark/90 via-silver-dark/70 to-silver-light/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur mb-6 text-silver-blue shadow-lg border border-white/10">
                <Mail size={32} />
             </div>
             <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
               We're here to help. Contact us using the information below or fill out the form to discuss your carbon project.
             </p>
          </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 bg-slate-50 pacaembu-font">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Contact Info & Map Card */}
            <div className="lg:w-1/3 space-y-8">
              
              {/* Info Card */}
              <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-silver-blue/10 flex items-center justify-center text-silver-blue shrink-0 group-hover:bg-silver-blue group-hover:text-white transition-all duration-300">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-slate-900 font-bold text-lg">+263 78 0049 196</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-silver-green/10 flex items-center justify-center text-silver-green shrink-0 group-hover:bg-silver-green group-hover:text-white transition-all duration-300">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-slate-900 font-bold text-lg break-all">owen@silvercarbon.co.zw</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Business Hours</p>
                      <p className="text-slate-900 font-bold">Mon - Fri: 8am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-8 bg-slate-900 rounded-3xl shadow-xl border border-slate-800 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-silver-green/10 rounded-full blur-2xl" />
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Map className="text-silver-green" size={24} />
                    <h3 className="text-xl font-bold">Visit Us</h3>
                 </div>
                 <div className="flex items-start gap-4 mb-6 relative z-10">
                    <MapPin className="text-slate-400 shrink-0 mt-1" size={20} />
                    <p className="text-slate-300 font-medium leading-relaxed">
                      NRZ Complex, Seke Road,<br/>
                      Harare, Zimbabwe
                    </p>
                 </div>
                 {/* Embedded Map */}
                 <div className="w-full h-48 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.243542269284!2d31.0505!3d-17.8256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMyLjIiUyAzMcKwMDMnMTEuOCJF!5e0!3m2!1sen!2szw!4v1635761234567!5m2!1sen!2szw" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy"
                      title="Office Location"
                    ></iframe>
                 </div>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-silver-blue to-silver-green" />
                
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">Send us a Message</h3>
                <p className="text-slate-500 mb-10">Fill out the form below and we'll get back to you shortly.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-silver-blue focus:ring-4 focus:ring-silver-blue/10 outline-none transition-all font-medium text-slate-900" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-silver-blue focus:ring-4 focus:ring-silver-blue/10 outline-none transition-all font-medium text-slate-900" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input required type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-silver-blue focus:ring-4 focus:ring-silver-blue/10 outline-none transition-all font-medium text-slate-900" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-silver-blue focus:ring-4 focus:ring-silver-blue/10 outline-none transition-all font-medium text-slate-900 cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Project Development</option>
                      <option>Carbon Offtake</option>
                      <option>Investor Relations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-10">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea required rows={5} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-silver-blue focus:ring-4 focus:ring-silver-blue/10 outline-none transition-all font-medium text-slate-900 resize-none" placeholder="Tell us about your project..." />
                </div>

                <button type="submit" className="w-full py-5 bg-gradient-to-r from-silver-blue to-silver-green text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-silver-blue/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}