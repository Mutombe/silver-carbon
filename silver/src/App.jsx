import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/homepage';
import About from './components/about/about';
import Services from './components/services/services';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Partnership, Team, Sustainability } from './components/about/about';
import { AssetDevelopment, CarbonFinance, CarbonCreditsOfftake } from './components/services/services';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/asset-development" element={<AssetDevelopment />} />
        <Route path="/services/finance" element={<CarbonFinance />} />
        <Route path="/services/offtake" element={<CarbonCreditsOfftake />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;