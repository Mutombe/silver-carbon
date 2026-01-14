import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Handshake } from 'lucide-react';
import SEO from '../components/SEO';

export default function CarbonOfftake() {
  return (
    <>
      <SEO title="Carbon Credits Offtake" description="Guaranteed future demand for carbon projects." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[80vh] flex items-center justify-center bg-silver-dark text-white pacaembu-font overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
            alt="Strategic Agreement" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-silver-dark via-silver-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm tracking-wider uppercase mb-4">
                <Link to="/services" className="hover:text-white transition-colors">Services</Link> / Offtake
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Offtake Agreements</h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Enabling project developers to bring their projects to bankable feasibility with guaranteed future demand.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 bg-white pacaembu-font">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">The Mechanics of Agreement</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">How we structure guarantees to ensure project success.</p>
          </motion.div>

          {/* Technical Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <img 
                src="/credits.png" 
                alt="Mechanics of a carbon offtake agreement - showing three steps: Project Created (developer creates a project that reduces or removes carbon emissions), Agreement Drafted (buyer agrees to purchase specified volume over years), and Carbon Credits Delivered (credits received as outlined in agreement)"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-slate-500 mt-6">
              Figure: Mechanics of a carbon offtake agreement
            </p>
          </motion.div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative mb-24">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10" />

            {[
                { num: "1", title: "Project Created", desc: "Developer creates a project that reduces or removes carbon emissions." },
                { num: "2", title: "Agreement Drafted", desc: "Buyer agrees to purchase a specified volume of credits over years at agreed terms.", active: true },
                { num: "3", title: "Credits Delivered", desc: "Once generated, credits are delivered to the buyer as outlined in the agreement." }
            ].map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`bg-white p-8 border rounded-3xl text-center transition-all ${step.active ? 'border-indigo-100 shadow-xl scale-105 z-10' : 'border-slate-100'}`}
                >
                    <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center font-bold text-3xl mb-8 ${step.active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-50 text-indigo-300'}`}>
                        {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-silver-green/10 rounded-xl flex items-center justify-center shrink-0 text-silver-green"><ShieldCheck size={24} /></div>
                <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">Secure Financing</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Access better financing terms and attract lower risk equity or debt capital.</p>
                </div>
            </div>
            <div className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-silver-blue/10 rounded-xl flex items-center justify-center shrink-0 text-silver-blue"><TrendingUp size={24} /></div>
                <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">Revenue Certainty</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Manage future price risk with predetermined volume and pricing.</p>
                </div>
            </div>
            <div className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 text-indigo-500"><Handshake size={24} /></div>
                <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">Strategic Partnership</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Long-term collaboration for sustainable growth and stability.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}