import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";

const pageContent = [
  {
    path: "/",
    title: "Home",
    content: "Welcome to Silver Carbon. We are committed to sustainable solutions.Orchestrating a symphony of sustainable finance, where each note resounds with the promise of a cleaner, more resilient world."
  },
  {
    path: "/about",
    title: "About",
    content: "Learn about our mission and vision for a sustainable future. Silver Carbon is dedicated to driving sustainable change through innovative financial solutions and cutting-edge technology. Leadership. Owen Mutero"
  },
  {
    path: "/services",
    title: "Services",
    content: "Explore our range of carbon reduction and sustainability services. Silver Carbon provides end-to-end support in the development of high-integrity carbon assets, from project design to carbon credits issuance.Silver Carbon offers innovative financing solutions to scale high-integrity carbon projects, including carbon streaming and offtake agreements"
  },
  {
    path: "/projects",
    title: "Projects",
    content: "View our successful sustainability and carbon reduction projects.Developing a large-scale afforestation project to restore degraded forest lands and generate high-quality carbon credits."
  },
  {
    path: "/contact",
    title: "Contact",
    content: "Get in touch with our sustainability experts. Leadership. Owen Mutero"
  }
];

export const SearchDialog = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = pageContent
      .map(page => {
        const titleMatch = page.title.toLowerCase().includes(query) ? 2 : 0;
        const contentMatch = page.content.toLowerCase().includes(query) ? 1 : 0;
        const score = titleMatch + contentMatch;

        return {
          ...page,
          score,
          highlight: {
            title: highlightText(page.title, query),
            content: highlightText(page.content, query)
          }
        };
      })
      .filter(page => page.score > 0)
      .sort((a, b) => b.score - a.score);

    setSearchResults(results);
  }, [searchQuery]);

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() 
        ? `<mark class="bg-green-400/20 text-green-400 rounded-sm px-1">${part}</mark>`
        : part
    ).join('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="w-full max-w-2xl mx-4 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-green-500/20"
            ref={searchRef}
          >
            <div className="flex justify-between items-center border-b border-green-500/20 p-4">
              <h2 className="text-lg font-medium text-green-400">Search</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-green-400 rounded-full hover:bg-green-500/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center border-b border-green-500/20 p-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  className="flex-1 ml-3 text-lg outline-none bg-transparent text-green-50 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-gray-400 hover:text-green-400 rounded-full hover:bg-green-500/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <div className="max-h-[60vh] overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result) => (
                      <motion.div
                        key={result.path}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-4 py-3 hover:bg-green-500/5 cursor-pointer group transition-colors"
                        onClick={() => {
                          navigate(result.path);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div 
                            className="text-base font-medium text-green-50"
                            dangerouslySetInnerHTML={{ __html: result.highlight.title }}
                          />
                          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-green-400 transition-all" />
                        </div>
                        <div 
                          className="text-sm text-gray-400 mt-1 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: result.highlight.content }}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="px-4 py-12 text-center">
                    <p className="text-lg text-green-50">No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-2 text-gray-400">Try different keywords or check spelling</p>
                  </div>
                ) : (
                  <div className="px-4 py-12 text-center">
                    <p className="text-lg text-green-50">Start typing to search...</p>
                    <p className="text-sm mt-2 text-gray-400">Search through pages, services, and content</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchDialog;