import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Search, FileText, Stamp, Monitor, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const steps = [
  { id: '1-3', title: "Planning & Design", icon: Search, desc: "Feasibility review and Project Design Document (PDD) preparation outlining objectives, location, and duration." },
  { id: '4', title: "Validation", icon: Stamp, desc: "Independent auditors (VVB) examine the PDD, often involving on-site field visits." },
  { id: '5', title: "Registration", icon: Check, desc: "Project is registered with a standard such as Verified Carbon Standard (VCS) or Gold Standard." },
  { id: '6', title: "Monitoring", icon: Monitor, desc: "Continuous documentation of data, project activities, and progress (2-7 year cycles)." },
  { id: '7', title: "Verification", icon: FileText, desc: "VVB checks and assesses whether values in the monitoring report are correct." },
  { id: '8', title: "Issuance", icon: ScrollText, desc: "Confirmed Carbon Credits are issued by the respective registry." },
];

export default function AssetDevelopment() {
  return (
    <>
      <SEO title="Carbon Asset Development" description="End-to-end carbon project development from design to issuance." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[80vh] flex items-center justify-center bg-silver-dark text-white pacaembu-font overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
            alt="Asset Development Planning" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-silver-dark via-silver-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <div className="flex items-center gap-2 text-silver-green font-bold text-sm tracking-wider uppercase mb-4">
                <Link to="/services" className="hover:text-white transition-colors">Services</Link> / Asset Development
             </div>
             <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">From Concept to Credit</h1>
             <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
               We navigate the complex lifecycle of carbon projects, ensuring high integrity and bankability at every stage.
             </p>
          </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 bg-white pacaembu-font">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column: Description */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Development Cycle</h2>
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                A climate project has a defined life cycle. Silver Carbon manages this entire process, ensuring compliance with international standards like Verra and Gold Standard. Our rigorous approach mitigates risk and maximizes credit yield.
              </p>
              
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6 text-xl">Key Focus Areas</h3>
                <ul className="space-y-4">
                    {[
                      'Forest Carbon (Afforestation/Reforestation)', 
                      'Biodiversity Protection', 
                      'Regenerative Agriculture', 
                      'Energy Efficiency'
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                            <span className="w-2.5 h-2.5 rounded-full bg-silver-green shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.5)]" /> 
                            {item}
                        </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="space-y-6 relative">
              {/* Vertical Line for Timeline Effect */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100 -z-10 hidden sm:block" />

              {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-50 hover:border-slate-200 hover:shadow-lg transition-all group"
                >
                    <div className="w-14 h-14 bg-white border-2 border-slate-100 group-hover:border-silver-blue rounded-full flex items-center justify-center shrink-0 shadow-sm text-silver-blue font-bold text-lg transition-colors">
                        {step.id}
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-3">
                            {step.title} <step.icon size={18} className="text-slate-400 group-hover:text-silver-green transition-colors" />
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}