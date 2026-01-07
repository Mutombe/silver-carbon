import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop"; // We will create this small utility
import Layout from "./components/Layout";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"; // Main Hub
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";

// Service Subpages
import AssetDevelopment from "./pages/AssetDevelopment";
import CarbonFinance from "./pages/CarbonFinancing";
import CarbonOfftake from "./pages/CarbonOfftake";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="pacaembu-font">
          <style jsx>{`
            /* Niveau Grotesk Font Face - Regular */

            /* Pacaembu Font Faces */
            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Thin-Trial.ttf") format("truetype");
              font-weight: 100;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Light-Trial.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Regular-Trial.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Medium-Trial.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Bold-Trial.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Black-Trial.ttf") format("truetype");
              font-weight: 900;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Ultra-Trial.ttf") format("truetype");
              font-weight: 950;
              font-style: normal;
              font-display: swap;
            }

            .pacaembu-font {
              font-family: "Pacaembu", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }
          `}</style>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* Services Routing */}
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/asset-development"
                element={<AssetDevelopment />}
              />
              <Route
                path="/services/carbon-finance"
                element={<CarbonFinance />}
              />
              <Route
                path="/services/carbon-offtake"
                element={<CarbonOfftake />}
              />

              <Route path="/projects" element={<Projects />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <Toaster position="top-center" richColors />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
