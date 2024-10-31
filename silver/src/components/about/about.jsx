import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  LeafyGreen, 
  Users, 
  ArrowRight, 
  Target, 
  Shield, 
  Lightbulb,
  HandshakeIcon,
  Sprout,
  Award,
  TreePine,
  Rocket,
  Building, Leaf,
  Linkedin, 
  Twitter, 
  Mail, 
  Briefcase,
  GraduationCap
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const LeadershipProfiles = () => {
  const leaders = [
    {
      name: "Owen Mutero",
      role: "Managing Partner",
      image: "user3.png",
      bio: "20+ years of experience in environmental markets and sustainable finance",
      expertise: ["Carbon Markets", "Strategic Leadership", "Sustainable Finance"],
      credentials: "MBA from Harvard Business School",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Managing Partner",
      image: "user3.png",
      bio: "Former tech lead at major environmental tech companies",
      expertise: ["Blockchain", "Environmental Tech", "Data Science"],
      credentials: "Ph.D. in Computer Science",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@example.com"
      }
    },
    {
      name: "Elena Ramaoko",
      role: "Head of Sustainability",
      image: "user3.png",
      bio: "Leading expert in climate change mitigation and adaptation strategies",
      expertise: ["Climate Science", "ESG", "Project Development"],
      credentials: "M.Sc. in Environmental Science",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "elena@example.com"
      }
    },
    {
      name: "David Kumar",
      role: "Chief Financial Officer",
      image: "user3.png",
      bio: "Specializes in green finance and sustainable investments",
      expertise: ["Green Finance", "Risk Management", "Strategic Planning"],
      credentials: "CFA, MBA in Finance",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@example.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300 mb-6">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-300">
            Meet the experts driving our mission forward
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={itemVariant}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center text-white hover:bg-white/15 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mb-6"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-400/30 hover:border-green-400/60 transition-colors duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute -bottom-2 -right-2 bg-green-400 rounded-full p-2"
                >
                  <Award className="w-6 h-6 text-gray-900" />
                </motion.div>
              </motion.div>

              <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
              <p className="text-green-400 font-medium mb-4">{leader.role}</p>
              
              <p className="text-gray-300 text-center text-sm mb-4">{leader.bio}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {leader.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">{leader.credentials}</span>
              </div>

              <motion.div 
                className="flex gap-4 mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0077B5" }}
                  href={leader.social.linkedin}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                  href={leader.social.twitter}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#4CAF50" }}
                  href={`mailto:${leader.social.email}`}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const AboutCard = ({ icon: Icon, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-green-100 overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
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
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-green-600" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <Link to={link}>
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
        </Link>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8 leading-tight"
          >
            About Silver Carbon
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Pioneering Sustainable Change
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-3xl mx-auto text-xl text-gray-300"
          >
            Silver Carbon is dedicated to driving sustainable change through innovative financial solutions and cutting-edge technology.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AboutCard
            icon={Building}
            title="Partnership with Traxys"
            description="Silver Carbon has partnered with Traxys, a global leader in physical commodity trading and financing, to leverage their expertise and resources in the carbon market."
            link="/partnership"
          />
          <AboutCard
            icon={Leaf}
            title="Commitment to Sustainability"
            description="At the core of Silver Carbon's mission is a steadfast commitment to environmental sustainability and positive impact through innovative solutions."
            link="/sustainability"
          />
          <AboutCard
            icon={Users}
            title="Expert Leadership Team"
            description="Silver Carbon is steered by a team of industry pioneers with decades of experience in finance, technology, and environmental stewardship."
            link="/team"
                  />
                  
              </div>
              
          </div>
          <LeadershipProfiles />
    </div>
  );
};

export default About;



const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Partnership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300 mb-6">
            Partnership with Traxys
          </h1>
          <p className="text-xl text-gray-300">Strengthening our market presence through strategic collaboration</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <HandshakeIcon className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Strategic Alliance</h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Globe, text: "Global market access and distribution networks" },
                { icon: Shield, text: "Enhanced trading capabilities and risk management" },
                { icon: Lightbulb, text: "Combined expertise in commodity markets" },
                { icon: Rocket, text: "Stronger financial backing for project development" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Market Impact</h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Globe, text: "Scale our carbon credit initiatives globally" },
                { icon: Shield, text: "Provide more robust financial solutions" },
                { icon: Lightbulb, text: "Access new market opportunities" },
                { icon: Rocket, text: "Enhance project development capabilities" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300 mb-6">
            Our Commitment to Sustainability
          </h1>
          <p className="text-xl text-gray-300">Building a better future through environmental stewardship</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <LeafyGreen className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Environmental Impact</h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: TreePine, text: "Development of high-integrity carbon projects" },
                { icon: Sprout, text: "Support for biodiversity conservation" },
                { icon: LeafyGreen, text: "Promotion of sustainable agriculture practices" },
                { icon: Globe, text: "Investment in renewable energy initiatives" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Sustainable Development Goals</h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Globe, text: "Climate Action (SDG 13)" },
                { icon: TreePine, text: "Life on Land (SDG 15)" },
                { icon: HandshakeIcon, text: "Partnerships for the Goals (SDG 17)" },
                { icon: Rocket, text: "Industry, Innovation and Infrastructure (SDG 9)" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300 mb-6">
            Expert Leadership Team
          </h1>
          <p className="text-xl text-gray-300">Driven by experience, guided by vision</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Industry Experience</h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Globe, text: "Carbon markets and environmental finance" },
                { icon: Target, text: "Project development and management" },
                { icon: Lightbulb, text: "Technology and innovation" },
                { icon: LeafyGreen, text: "Sustainable development" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Core Values</h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: LeafyGreen, text: "Environmental stewardship" },
                { icon: Lightbulb, text: "Innovation and excellence" },
                { icon: Shield, text: "Transparency and integrity" },
                { icon: HandshakeIcon, text: "Collaborative partnership" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export { Partnership, Sustainability, Team };