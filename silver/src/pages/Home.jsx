import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Leading Carbon Finance & Asset Development" 
        description="Silver Carbon: Where finance and sustainability converge. We orchestrate carbon asset development and finance for a resilient world."
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-silver-dark pacaembu-font">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            alt="Sustainable Future" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay using Brand Colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-silver-dark via-silver-dark/90 to-silver-blue/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-silver-green font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-silver-green animate-pulse" />
              Pioneering Sustainable Change
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Where Impact Isn't <br />
              Just a Goal, <br />
              {/* THE NEW BRAND GRADIENT TEXT */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-blue to-silver-green">
                It's Our Legacy.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              Orchestrating a siphon of carbon asset development and carbon finance, where each note resounds with the promise of a cleaner, more resilient world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                {/* THE NEW BRAND GRADIENT BUTTON */}
                <button className="px-8 py-4 bg-gradient-to-r from-silver-blue to-silver-green text-white rounded-full font-bold shadow-lg shadow-silver-blue/20 hover:shadow-silver-blue/40 transition-all flex items-center gap-2 group">
                  Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white pacaembu-font">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-slate-600 text-lg">
              Silver Carbon offers a comprehensive suite of services to help drive sustainable change, bridging the gap between developing supply and developed demand.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Asset Development",
                desc: "From project design to carbon credits issuance, covering forest carbon, biodiversity, and agriculture.",
                // Using Brand Green
                color: "text-silver-green",
                bg: "bg-green-50",
                hoverBorder: "group-hover:border-silver-green/50"
              },
              {
                icon: TrendingUp,
                title: "Carbon Finance",
                desc: "Innovative stream financing solutions to scale high-integrity carbon credits projects.",
                // Using Brand Blue
                color: "text-silver-blue",
                bg: "bg-blue-50",
                hoverBorder: "group-hover:border-silver-blue/50"
              },
              {
                icon: ShieldCheck,
                title: "Credits Offtake",
                desc: "Enabling project developers to bring their projects to bankable feasibility with guaranteed future demand.",
                color: "text-indigo-500",
                bg: "bg-indigo-50",
                hoverBorder: "group-hover:border-indigo-500/50"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`group p-8 rounded-3xl border border-slate-100 ${service.hoverBorder} shadow-sm hover:shadow-2xl transition-all duration-500 bg-white`}
              >
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                <Link to="/services" className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-silver-blue transition-colors">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-silver-dark relative overflow-hidden pacaembu-font">
        {/* Gradient Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-silver-blue/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Ready to Make an Impact?
          </motion.h2>
          <motion.p {...fadeInUp} className="text-xl text-slate-300 mb-10">
            Join us in rewriting the script of possibility.
          </motion.p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-gradient-to-r from-silver-blue to-silver-green text-white rounded-full font-bold hover:shadow-lg hover:shadow-silver-green/20 transition-all">
              Partner With Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}