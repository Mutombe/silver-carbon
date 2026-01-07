import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';

export default function Projects() {
  return (
    <>
      <SEO title="Our Projects" description="Showcasing our major initiatives including the Zimrec Renewable Energy Project." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[80vh] flex items-center justify-center bg-slate-900 text-white pacaembu-font overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
            alt="Renewable Energy" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-silver-dark via-silver-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <div className="flex items-center gap-2 text-silver-blue font-bold tracking-wider uppercase mb-4">
                <Zap size={18} className="text-silver-green" /> Our Portfolio
             </div>
             <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Featured Projects</h1>
             <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
               Real-world impact through innovative carbon finance and renewable energy development.
             </p>
          </motion.div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-white pacaembu-font">
        <div className="container mx-auto px-6">
          
          {/* ZIMREC Project Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group"
          >
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[500px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
                alt="Solar Energy Zimbabwe" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-silver-dark/80 to-transparent" />
              <div className="absolute bottom-10 left-10 max-w-sm">
                <div className="inline-block px-4 py-1.5 bg-silver-green text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full mb-4 shadow-lg">
                  Renewable Energy
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-2">ZIMREC Project</h3>
                <p className="text-silver-blue font-medium text-lg">Zimbabwe Renewable Energy Certificates</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-12 lg:p-16 bg-white flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-6">Boosting Green Investment</h4>
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                Silver Carbon is a key partner in the ZIMREC initiative, designed to accelerate renewable energy adoption in Zimbabwe. By validating and trading Renewable Energy Certificates (RECs), we provide a transparent mechanism for companies to claim clean energy usage.
              </p>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Establishing a verified registry for renewable energy generation.",
                  "Creating a tradable asset class for local energy producers.",
                  "Aligning Zimbabwe's energy sector with global sustainability standards."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-silver-green/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="text-silver-green" size={14} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://www.heraldonline.co.zw/zimbabwe-launches-renewable-energy-certificates-to-boost-green-investment/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-bold text-slate-900 hover:text-silver-blue transition-colors group/link"
              >
                Read Press Release <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}