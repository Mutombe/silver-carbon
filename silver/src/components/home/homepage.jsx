import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Trees,
  Factory,
  Sprout,
  ArrowRight,
  ChevronDown,
  LineChart,
  ExternalLink,
} from "lucide-react";

// Enhanced CarbonCycleAnimation with slower rotation and reduced opacity
const CarbonCycleAnimation = ({ scrollProgress }) => {
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 6) * 0.2;
  });

  const scale = 0.8;

  return (
    <group
      ref={group}
      scale={scrollProgress ? scale * (1 - scrollProgress * 0.3) : scale}
    >
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#4ade80"
          metalness={0.3}
          roughness={0.7}
          transparent
          opacity={0.6}
          emissive="#4ade80"
          emissiveIntensity={0.1}
        />
      </mesh>

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.5,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color="#60a5fa"
              metalness={0.6}
              roughness={0.4}
              transparent
              opacity={0.7}
              emissive="#60a5fa"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const nextAngle = ((i + 1) / 8) * Math.PI * 2;
        return (
          <line key={`line-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={
                  new Float32Array([
                    Math.cos(angle) * 3,
                    Math.sin(angle) * 0.5,
                    Math.sin(angle) * 3,
                    Math.cos(nextAngle) * 3,
                    Math.sin(nextAngle) * 0.5,
                    Math.sin(nextAngle) * 3,
                  ])
                }
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#60a5fa" transparent opacity={0.4} />
          </line>
        );
      })}
    </group>
  );
};

// Enhanced ServiceCard with better hover effects
const ServiceCard = ({ icon: Icon, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button onClick={handleClick}>
      <motion.div
        className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-green-100 overflow-hidden group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-green-500/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10">
          <motion.div
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-green-600" />
          </motion.div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <motion.div
            className="flex items-center text-green-600 font-medium"
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
};

const StatsCard = ({ number, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-xl p-6 rounded-xl text-center border border-white/10"
  >
    <h4 className="text-4xl font-bold text-white mb-2">{number}</h4>
    <p className="text-green-100">{label}</p>
  </motion.div>
);

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full flex flex-col lg:flex-row items-center">
      {/* Left side: Hero content */}
      <div className="w-full lg:w-1/2 px-4 lg:px-12 py-12 lg:py-0 order-2 lg:order-1 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl mx-auto lg:mx-0"
        >
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Where Impact Isn't Just a Goal,
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent py-4">
              It's Our Legacy
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-12">
            Orchestrating a siphon of carbon asset development and carbon
            finance, where each note resounds with the promise of a cleaner,
            more resilient world.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium flex items-center hover:from-green-400 hover:to-green-500 transition-all shadow-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="px-6 py-3 border-2 border-green-400 text-green-400 rounded-full font-medium hover:bg-green-500/10 transition-colors backdrop-blur-sm shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Right side: Logo and 3D Animation in a column */}
      <div className="w-full lg:w-1/2 h-[80vh] lg:h-screen order-1 lg:order-2 flex flex-col">
        {/* Logo Section */}
        <div className="h-1/3 w-full flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-md"
          >
            {/* Replace with your actual logo */}
            <div className=" backdrop-blur-xl p-6 rounded-2xl mt-40 mb-40">
              <img
                src="/silver-logo.svg"
                alt="Leaf"
                className="w-full max-w-md h-auto text-green-500 text-white"
              />
            </div>
          </motion.div>
        </div>

        {/* Carbon Animation Section */}
        <div className="h-2/3 w-full relative">
          <div className="absolute inset-0">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={0.7} />
              <Suspense fallback={null}>
                <CarbonCycleAnimation />
                <Environment preset="sunset" />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2.5}
                rotateSpeed={0.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <Hero />

      {/* Rest of the sections with enhanced styling */}
      <div className="relative py-24 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bridging the gap between supply and demand in carbon markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Trees}
              title="Carbon Asset Development"
              description="From project design to carbon credits issuance, covering forest carbon, biodiversity, agriculture, and more."
              link="/services/asset-development"
            />
            <ServiceCard
              icon={LineChart}
              title="Carbon Finance"
              description="Innovative stream financing solutions to scale high-integrity carbon credits projects and accelerate global climate action."
              link="/services/finance"
            />
            <ServiceCard
              icon={Sprout}
              title="Carbon Credits Offtake"
              description="Enabling project developers to bring their projects to bankable feasibility with guaranteed future demand."
              link="/services/offtake"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-green-100 mb-12">
            Join us in rewriting the script of possibility
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (navigate('/contact'))}
            className="px-8 py-4 bg-white text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors flex items-center mx-auto shadow-lg"
          >
            Contact Us
            <ExternalLink className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
