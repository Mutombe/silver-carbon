import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, Wind, Recycle, Zap, Tractor, DollarSign, FileCheck, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const ProcessStep = ({ number, title, desc }) => (
  <div className="relative pl-10 pb-10 border-l-2 border-slate-100 last:border-0 last:pb-0 pacaembu-font">
    {/* Gradient Number Badge */}
    <div className="absolute -left-[19px] top-0 w-9 h-9 bg-white border-2 border-silver-green rounded-full flex items-center justify-center font-bold text-silver-blue shadow-sm">
      {number}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <>
      <SEO title="Our Services" description="Asset Development, Carbon Finance, and Offtake Agreements." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-silver-dark text-white pacaembu-font overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="ag1.jpg" 
            alt="Sustainable Landscape" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-silver-dark/80 via-silver-dark/60 to-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-100 mb-6 drop-shadow-sm">
               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-blue to-silver-green">Expertise</span>
             </h1>
             <p className="text-xl text-slate-900 max-w-3xl mx-auto font-medium">
               Bridging the gap between project potential and market realization through three core pillars.
             </p>
          </motion.div>
        </div>
      </div>

      {/* 1. ASSET DEVELOPMENT */}
      <section className="py-20 bg-white" id="development">
        <div className="container mx-auto px-6 pacaembu-font">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 sticky top-24">
              <span className="text-silver-green font-bold tracking-wider uppercase mb-2 block">01. Creation</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Carbon Asset Development</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We develop carbon assets from project design to credit issuance. Our technical expertise ensures high-integrity projects that meet global standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Sprout, label: "Forest Carbon" },
                  { icon: Leaf, label: "Biodiversity" },
                  { icon: Tractor, label: "Regenerative Agric" },
                  { icon: Zap, label: "Energy Efficiency" },
                  { icon: Wind, label: "Transport Efficiency" },
                  { icon: Recycle, label: "Waste Management" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-silver-green/30 transition-colors">
                    <item.icon className="text-silver-green" size={20} />
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100 pacaembu-font">
              <h3 className="text-2xl font-bold mb-8 text-center">Development Lifecycle</h3>
              <div className="space-y-2">
                <ProcessStep number="1" title="Planning & Feasibility" desc="Reviewing general feasibility, project design, and financing structure." />
                <ProcessStep number="2" title="PDD Design" desc="Creating the Project Design Document outlining objectives, location, and timeline." />
                <ProcessStep number="3" title="Validation" desc="Independent auditors (VVB) examine the PDD and conduct on-site interviews." />
                <ProcessStep number="4" title="Registration" desc="Project registered with standards like Verra (VCS) or Gold Standard." />
                <ProcessStep number="5" title="Monitoring" desc="Continuous documentation of data, project activities, and progress." />
                <ProcessStep number="6" title="Verification & Issuance" desc="Final VVB check followed by the official issuance of carbon credits." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CARBON FINANCE (Stream) */}
      <section className="py-20 bg-silver-dark text-white relative overflow-hidden pacaembu-font" id="finance">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-silver-blue/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] border-2 border-dashed border-slate-700 rounded-full animate-spin-slow" />
                </div>
                
                {/* Center Node with Brand Gradient Border */}
                <div className="absolute inset-0 m-auto w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center p-[4px] bg-gradient-to-r from-silver-blue to-silver-green z-20 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display font-bold text-xl leading-tight">Silver<br/>Carbon</div>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-silver-green text-slate-900 p-4 rounded-xl font-bold text-sm shadow-lg w-40 text-center"
                  initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                >
                  $$$ Upfront Deposit
                </motion.div>

                <motion.div 
                   className="absolute bottom-0 right-0 bg-orange-500 text-white p-4 rounded-xl font-bold text-sm shadow-lg w-40 text-center"
                   initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                >
                  Credit Buyers
                </motion.div>

                <motion.div 
                   className="absolute bottom-0 left-0 bg-emerald-700 text-white p-4 rounded-xl font-bold text-sm shadow-lg w-40 text-center"
                   initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                >
                  Project Partner
                </motion.div>
              </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2 pacaembu-font">
              <span className="text-silver-blue font-bold tracking-wider uppercase mb-2 block">02. Scaling</span>
              <h2 className="text-4xl font-bold mb-6">Carbon Stream Financing</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We provide financing for project development in exchange for a stream of future cashflows. This aligns interests to accelerate climate action.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-silver-blue/20 flex items-center justify-center text-silver-blue shrink-0">1</div>
                  <p className="text-slate-300">Silver Carbon makes an upfront deposit to fund development/expansion.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-silver-blue/20 flex items-center justify-center text-silver-blue shrink-0">2</div>
                  <p className="text-slate-300">We receive rights to purchase future credits generated.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-silver-blue/20 flex items-center justify-center text-silver-blue shrink-0">3</div>
                  <p className="text-slate-300">Proceeds flow back to the project and local communities.</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OFFTAKE */}
      <section className="py-20 bg-white" id="offtake">
        <div className="container mx-auto px-6 pacaembu-font">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-500 font-bold tracking-wider uppercase mb-2 block">03. Guarantee</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Carbon Credits Offtake</h2>
            <p className="text-slate-600 text-lg">
              Bringing bankability to projects through guaranteed future demand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
                { icon: DollarSign, title: "Secure Financing", desc: "Access better financing terms and attract lower risk equity or debt capital." },
                { icon: FileCheck, title: "Revenue Certainty", desc: "Manage future price risk with predetermined volume and commercial pricing structures." },
                { icon: Globe, title: "Strategic Partnership", desc: "Long-term collaboration with a partner that understands global market dynamics." }
            ].map((item, i) => (
                <div key={i} className="p-8 bg-indigo-50 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all hover:bg-white hover:shadow-xl group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}