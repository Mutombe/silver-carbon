import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  LeafyGreen,
  Users,
  ArrowRight,
  Shield,
  Lightbulb,
  HandshakeIcon,
  Sprout,
  Award,
  TreePine,
  Rocket,
  Building,
  Leaf,
  Linkedin,
  Twitter,
  Mail,
  Briefcase,
  GraduationCap,
  Calendar,
  Target,
  X,
  BadgeDollarSign, 
  Cpu, 
  BarChart3, 
  Handshake
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const LeadershipProfiles = () => {
  const [selectedLeader, setSelectedLeader] = React.useState(null);

  const leaders = [
    {
      name: "Owen Mutero",
      role: "Managing Director",
      image: "owen.jpeg",
      bio: "Emerges as a luminary in the financial realm with over two decades of mastery as an Investment Banker, Equities Trader and Stockbroking Executive.",
      expertise: [
        "Carbon Markets",
        "Strategic Leadership",
        "Carbon Finance",
      ],
      achievements: [
        "Managing Director and Co -founder of Cratos Institutional then an Institutional Stock Broking & Derivatives firm and a member of the Johannesburg Stock Exchange.",
        "Co-founder and Executive director of Cratos Asset Management  which manages both Institutional and retail funds.",
        "Project team leader in specialised finance,  Capital Markets Division, Investec Bank",
      ],
      yearsExperience: 20,
      vision: "Building bridges between global carbon markets and African opportunities",
      credentials: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "owen@silvercarbon.co.zw",
      },
    },
    {
      name: "Clara Sadomba",
      role: "Executive Director",
      image: "partner.jpg",
      bio: "A distinguished Engineer with over 26yrs of Experience at operational, middle and executive managerial levels",
      expertise: ["Mining", "Logistics", "Strategic leadership"],
      credentials: "",
      achievements: [
        "Eng Clara  was with ZIMASCO, Zimbabwe's largest integrated ferrochrome producer, were she rose from operational , middle management to General Manager- Marketing",
        "Chief Executive Officer, Silvergill logistics, an integrated logistics service provider specialising in the movement of bulk minerals and bulk commodites via rail.",
        "Vice Chairperson Zimbabwe Consolidated Diamond Company Board",
        "Chairperson Zimbabwe Mining Industry Pension Fund",
      ],
      yearsExperience: 26,
      vision: "Driving sustainable change through innovative technology and strategic partnerships",
      social: {
        linkedin: "https://www.linkedin.com/in/clara-sadomba-68360428",
        twitter: "#",
        email: "owen@silvercarbon.co.zw",
      },
    },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={itemVariant}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedLeader(leader)}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center text-white hover:bg-white/15 transition-all duration-300 cursor-pointer"
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

              <p className="text-gray-300 text-center text-sm mb-4">
                {leader.bio}
              </p>

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
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                  href={leader.social.twitter}
                  className="text-gray-400 hover:text-gray-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#4CAF50" }}
                  href={`mailto:${leader.social.email}`}
                  className="text-gray-400 hover:text-gray-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedLeader} onOpenChange={() => setSelectedLeader(null)}>
          <DialogContent className="bg-gray-900 border-green-400/20 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-400">
                  <img
                    src={selectedLeader?.image}
                    alt={selectedLeader?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-green-400">{selectedLeader?.name}</h2>
                  <p className="text-sm text-gray-400 font-normal">{selectedLeader?.role}</p>
                </div>
              </DialogTitle>
            </DialogHeader>

            {selectedLeader && (
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-400" />
                    Professional Background
                  </h3>
                  <p className="text-gray-300">{selectedLeader.bio}</p>
                </div>

                {/*<div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Vision & Strategy
                  </h3>
                  <p className="text-gray-300">{selectedLeader.vision}</p>
                </div>*/}

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    Experience 
                  </h3>
                  <ul className="list-none space-y-2">
                    {selectedLeader.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-400" />
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      {selectedLeader.yearsExperience}+ Years Experience
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.2, color: "#0077B5" }}
                      href={selectedLeader.social.linkedin}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                      href={selectedLeader.social.twitter}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, color: "#4CAF50" }}
                      href={`mailto:${selectedLeader.social.email}`}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
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
            As the world marches towards a global net zero by 2050, Silver
            Carbon was born out of the need to create value in the carbon credits
            value chain from creation to retirement. Having observed the
            informational asymmetries and fragmentations that exist between the
            developing countries that represent the bulk of the potential supply
            of carbon credits and the developed countries representing the bulk
            of the current and potential demand.
            <br></br>
            <br></br>
            Leading to a snail pace development of carbon projects in Africa due
            to a lack of finance, technical expertise and the market for carbon
            credits, on the other hand the developed world whist equipped with
            the Finance, technical expertise and thirst for carbon credits lacks
            the intricate knowledge to navigate the African landscape.
            <br></br>
            <br></br>
            In that light, Silver Carbon in partnership with Traxys, seeks to
            bridge the gap through carbon asset development, carbon finance and
            carbon credits offtake service offerings. Traxys is a global
            physical mineral commodities trading, financing, marketing and
            sourcing company with a presence in twenty countries and four
            continents and at the forefront of Environmental, Social And
            Governance (ESG) good practices.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AboutCard
            icon={Building}
            title="Partnership with Traxys"
            description="Silver Carbon has partnered with Traxys, a global leader in physical commodity trading and financing, leveraging on their expertise."
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
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Partnership = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-300 mb-6">
            Partnership with Traxys
          </h1>
          <div className="flex justify-center items-center gap-8 mb-8">
            <img 
              src="/trax.png" 
              alt="Traxys" 
              className="h-22 w-42"
            />
            <Handshake className="w-8 h-8 text-green-400 mr-4" />
            <img 
              src="/silver-logo.svg" 
              alt="Traxys Logo" 
              className="object-contain h-40 w-40"
            />
          </div>
          <p className="text-xl text-gray-300">
            Strengthening our market presence through strategic collaboration
          </p>
        </div>

        <div className="">
          <div className="bg-white/10 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Handshake className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold">Strategic Alliance</h2>
            </div>
            <ul className="space-y-4">
              {[
                {
                  icon: BadgeDollarSign,
                  text: "Financial backing for project development"
                },
                {
                  icon: GraduationCap,
                  text: "Project Development Expertise"
                },
                {
                  icon: Cpu,
                  text: "Project Development Technology"
                },
                {
                  icon: BarChart3,
                  text: "Combined expertise in commodity markets"
                },
                {
                  icon: Globe,
                  text: "Enhanced Access to global end buyers"
                }
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          <p className="text-xl text-gray-300">
            Building a better future through environmental stewardship
          </p>
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
                {
                  icon: TreePine,
                  text: "Development of high-integrity carbon projects",
                },
                { icon: Sprout, text: "Support for biodiversity conservation" },
                {
                  icon: LeafyGreen,
                  text: "Promotion of sustainable agriculture practices",
                },
                {
                  icon: Globe,
                  text: "Investments in energy efficiency and renewable energy initiatives.",
                },
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
              <h2 className="text-2xl font-bold">
                Sustainable Development Goals
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Globe, text: "Climate Action (SDG 13)" },
                { icon: TreePine, text: "Life on Land (SDG 15)" },
                {
                  icon: HandshakeIcon,
                  text: "Partnerships for the Goals (SDG 17)",
                },
                {
                  icon: Rocket,
                  text: "Industry, Innovation and Infrastructure (SDG 9)",
                },
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
      <LeadershipProfiles />
    </div>
    
  );
};

export { Partnership, Sustainability, Team };
