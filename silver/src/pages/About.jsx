import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Globe, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

// Reusable Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const LeaderCard = ({ name, role, bio, tags, image }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 pacaembu-font"
  >
    {/* Image Section */}
    <div className="h-80 overflow-hidden relative">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
      />
      {/* Gradient Overlay on Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-silver-dark/90 via-transparent to-transparent opacity-80" />
      
      {/* Name & Role Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-silver-green font-medium tracking-wide uppercase text-sm">{role}</p>
      </div>
      
      {/* Brand Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-silver-blue to-silver-green" />
    </div>

    {/* Content Section */}
    <div className="p-8">
      <p className="text-slate-600 text-sm leading-relaxed mb-6 border-l-2 border-silver-blue/30 pl-4">
        {bio}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-100 group-hover:border-silver-blue/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Pioneering sustainable change in the carbon market." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-silver-dark pacaembu-font">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Connection" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-silver-dark/80 via-silver-dark/80 to-silver-dark" />
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver-green text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-silver-green animate-pulse" />
              Our Vision
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Pioneering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-blue to-silver-green">
                Sustainable Change
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              As the world marches towards Net Zero 2050, Silver Carbon was born to bridge the gap between developing supply and developed demand.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- MISSION & PARTNERSHIP --- */}
      <section className="py-24 bg-white pacaembu-font">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8 font-display">Bridging the <span className="text-silver-blue">Gap</span></h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                We observed informational asymmetries: developing countries hold the bulk of potential carbon supply but face a "snail pace" development due to lack of finance and expertise. 
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Conversely, the developed world has the finance but lacks intricate knowledge of the African landscape. We stand in the middle, connecting these two worlds.
              </p>
              
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-silver-blue/30 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-silver-green shadow-sm group-hover:scale-110 transition-transform">
                    <Target size={24} />
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900">Our Mission</h3>
                </div>
                <p className="text-slate-600 text-lg">
                  To create value in the carbon credits value chain from creation to retirement, serving as the vital link between potential and realization.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop" 
                 alt="Environment" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-silver-dark via-transparent to-transparent opacity-90" />
               
               <div className="absolute bottom-10 left-10 text-white max-w-sm">
                 <div className="w-16 h-1 bg-silver-green mb-6" />
                 <h4 className="text-2xl font-bold mb-2">Partnership with Traxys</h4>
                 <p className="text-slate-300 mb-6">Leveraging global leadership in physical commodity trading and financing to scale impact.</p>
                 <button className="flex items-center gap-2 text-silver-blue font-bold hover:gap-4 transition-all">
                    Read Announcement <ArrowRight size={20} />
                 </button>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-24 bg-slate-50 pacaembu-font">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900">Why Silver Carbon?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Pioneering new financial structures for carbon assets." },
              { icon: Users, title: "Collaboration", desc: "Working closely with local communities and global partners." },
              { icon: Globe, title: "Global Reach", desc: "Connecting African projects to international markets." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-silver-blue mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-24 bg-white pacaembu-font relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-white -z-10" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-silver-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Experts</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Leadership Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Steered by industry pioneers with decades of experience in finance, technology, and environmental stewardship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <LeaderCard 
              name="Clara Sadomba"
              role="Chairperson"
              // Placeholder image for a professional woman
              image="/clara-sadomba.jpg"
              bio="A distinguished Engineer with over 26 years of experience at operational, middle, and executive managerial levels. She brings a wealth of technical and strategic insight to the board."
              tags={['Mining', 'Logistics', 'Strategic Leadership']}
            />
            <LeaderCard 
              name="Owen Mutero"
              role="Managing Director"
              // Placeholder image for a professional man
              image="/owen-mutero.jpeg"
              bio="Emerges as a luminary in the financial realm with over two decades of mastery as an Investment Banker, Equities Trader, and Stockbroking Executive. Driving the financial architecture of our carbon projects."
              tags={['Carbon Markets', 'Financial Strategy', 'Carbon Finance']}
            />
          </div>
        </div>
      </section>
    </>
  );
}