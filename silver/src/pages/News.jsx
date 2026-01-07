import React from 'react';
import { ExternalLink, Calendar, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const articles = [
  {
    title: "Zimbabwe launches renewable energy certificates to boost green investment",
    source: "The Herald",
    date: "Recent",
    url: "https://www.heraldonline.co.zw/zimbabwe-launches-renewable-energy-certificates-to-boost-green-investment/",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
    desc: "A major step forward for Zimbabwe's green economy. The ZIMREC initiative promises to revolutionize how renewable energy is tracked and traded."
  },
  {
    title: "Silver Carbon Topic",
    source: "NewsDay Zimbabwe",
    date: "Recent",
    url: "https://www.newsday.co.zw/southerneye/topic/silver-carbon",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop",
    desc: "Latest updates and coverage regarding Silver Carbon's initiatives in the region, focusing on community impact and sustainable development."
  },
];

export default function News() {
  return (
    <>
      <SEO title="News & Insights" description="Latest updates from Silver Carbon and the carbon market." />
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-slate-900 text-white pacaembu-font overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" 
            alt="News Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-silver-dark via-silver-dark/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur mb-6 text-silver-green">
                <Newspaper size={32} />
             </div>
             <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">News & Insights</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
               Staying ahead of the curve in the evolving landscape of carbon finance and sustainability.
             </p>
          </motion.div>
        </div>
      </div>

      {/* --- ARTICLES GRID --- */}
      <div className="py-24 bg-slate-50 min-h-screen pacaembu-font">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <motion.a 
                key={i} 
                href={article.url} 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-lg">
                    <ExternalLink size={12} className="text-silver-blue" /> {article.source}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-silver-green text-sm font-bold tracking-wide uppercase mb-4">
                    <Calendar size={14} /> {article.date}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-silver-blue transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {article.desc}
                  </p>
                  
                  {/* Brand Gradient Text Link */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-blue to-silver-green font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Article <span className="text-silver-green">&rarr;</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}