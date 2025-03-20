import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Telescope, UserCircle, ShieldCheck } from "lucide-react";
import { SearchDialog } from "../search/search";
import { ContactModal } from "../contact/contact";
import { useSelector, useDispatch } from "react-redux";
import { initializeAuth } from "@/redux/slices/authSlice";
import LoginModal from "../authmodals/login";
import RegisterModal from "../authmodals/register";
import LogoutButton from "../authmodals/logout";

const NavLink = ({ to, children, isMobile = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <motion.div
        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${isMobile ? "text-white w-full text-lg py-4" : "text-white"}
          ${isActive ? "text-green-400" : "hover:text-green-400"}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full
              ${isMobile ? "hidden" : "block"}`}
            layoutId="navbar-underline"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.div>
    </Link>
  );
};

const Logo = () => (
  <motion.div
    className="flex items-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative w-8 h-8">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="/silver-logo.svg"
          alt="Leaf"
          className="w-full max-w-md h-auto text-green-500 text-white"
        />
      </motion.div>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
      Silver Carbon
    </span>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  useEffect(() => {
    document.body.style.backgroundColor = "#111827";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isAdmin = user?.role === 'ADMIN'; //|| user?.is_superuser;
  console.log(user);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-green-500/5 via-blue-500/5 to-green-500/5 backdrop-blur-lg shadow-lg border-b border-green-500/10"
            : "bg-gradient-to-r from-green-500/5 via-blue-500/5 to-green-500/5 backdrop-blur-lg shadow-lg border-b border-green-500/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAdmin && (
                  <NavLink to="/admin">
                    <div className="flex items-center">
                      <ShieldCheck className="mr-1 w-4 h-4" />
                      Admin
                    </div>
                  </NavLink>
                )}
              </div>
              
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="px-4 py-2 text-white hover:text-green-400 transition-colors"
                >
                  <Telescope className="w-5 h-5" />
                </motion.button>
                <SearchDialog
                  isOpen={isSearchOpen}
                  setIsOpen={setIsSearchOpen}
                />
              </div>

              <div className="flex items-center gap-2">
                {isAuthenticated ? (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to="/profile" className="px-4 py-2 text-white hover:text-green-400 transition-colors">
                        <UserCircle className="w-5 h-5" />
                      </Link>
 
                    </motion.div>                     <Link to="/devices" className="px-4 py-2 text-white hover:text-green-400 transition-colors">
                        Devices
                      </Link>
                    <LogoutButton />
                  </>
                ) : (
                  <>
                    <LoginModal />
                    <RegisterModal />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 
                        text-white rounded-full text-sm font-medium hover:from-green-400 
                        hover:to-green-500 transition-all shadow-lg flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      <ContactModal />
                      
                    </motion.button>
                  </>
                )}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-200 hover:text-green-400
                hover:bg-white/5 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-b from-gray-900 to-green-900 border-t border-green-500/10"
            >
              <div className="px-4 py-4 space-y-1">
                <NavLink to="/" isMobile>
                  Home
                </NavLink>
                <NavLink to="/about" isMobile>
                  About
                </NavLink>
                <NavLink to="/services" isMobile>
                  Services
                </NavLink>
                <NavLink to="/projects" isMobile>
                  Projects
                </NavLink>
                <NavLink to="/contact" isMobile>
                  Contact
                </NavLink>
                {isAdmin && (
                  <NavLink to="/admin" isMobile>
                    <div className="flex items-center">
                      <ShieldCheck className="mr-1 w-4 h-4" />
                      Admin
                    </div>
                  </NavLink>
                )}
                
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="px-4 py-2 text-white hover:text-green-400 transition-colors"
                  >
                    <Telescope className="w-5 h-5" />
                  </motion.button>
                  <SearchDialog
                    isOpen={isSearchOpen}
                    setIsOpen={setIsSearchOpen}
                  />
                </div>

                {isAuthenticated ? (
                  <>
                    <NavLink to="/profile" isMobile>
                      <div className="flex items-center">
                        <UserCircle className="mr-1 w-5 h-5" />
                        Profile
                      </div>
                    </NavLink>
                    <NavLink to="/devices" isMobile>
                      <div className="flex items-center">
                        Devices
                      </div>
                    </NavLink>
                    <div className="pt-2">
                      <LogoutButton />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pt-2 flex flex-col gap-3">
                      <LoginModal isMobile />
                      <RegisterModal isMobile />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 
                          text-white rounded-full text-lg font-medium hover:from-green-400 
                          hover:to-green-500 transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <ContactModal />
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16" />
    </>
  );
};

export default Navbar;