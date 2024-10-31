import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Trees, 
  LineChart, 
  Sprout,
  ArrowRight,
  Leaf,
  Building2,
  Car,
  Recycle,
  Bird,
  Factory,
  DollarSign,
  Users,
  ChevronRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-300 sm:text-4xl lg:text-5xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Silver Carbon offers a comprehensive suite of services to help drive sustainable change.
          </motion.p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 overflow-hidden shadow rounded-lg"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Carbon Asset Development</h3>
              <p className="mt-2 text-base text-gray-500">
                Silver Carbon provides end-to-end support in the development of high-integrity carbon assets, from project design to carbon credits issuance.
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <Link
                to="/services/asset-development"
                className="text-green-600 font-medium hover:text-green-800 flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 overflow-hidden shadow rounded-lg"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Carbon Finance</h3>
              <p className="mt-2 text-base text-gray-500">
                Silver Carbon offers innovative financing solutions to scale high-integrity carbon projects, including carbon streaming and offtake agreements.
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <Link
                to="/services/finance"
                className="text-green-600 font-medium hover:text-green-800 flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-50 overflow-hidden shadow rounded-lg"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Carbon Credits Offtake</h3>
              <p className="mt-2 text-base text-gray-500">
                Silver Carbon offers offtake agreements to provide carbon project developers with secure future revenue and access to international markets.
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <Link
                to="/services/offtake"
                className="text-green-600 font-medium hover:text-green-800 flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;



// Shared Components
const PageHeader = ({ title, description }) => (
  <div className="relative py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-white mb-6"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-green-100 max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-green-100 overflow-hidden group"
  >
    <div className="relative z-10">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ProcessStep = ({ number, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex gap-6"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-green-100">{description}</p>
    </div>
  </motion.div>
);

// Asset Development Page
export const AssetDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <PageHeader
        title="Carbon Asset Development"
        description="From project design to carbon credits issuance, we develop high-integrity carbon assets across multiple sectors."
      />

      {/* Project Types */}
      <div className="relative py-24 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Project Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Trees}
              title="Forest Carbon"
              description="New forests, forested land conservation, afforestation, reforestation, and degraded forest rehabilitation."
              delay={0.2}
            />
            <FeatureCard
              icon={Bird}
              title="Forest Biodiversity"
              description="Protection and conservation of both flora (tree species) and fauna (animal and bird species)."
              delay={0.3}
            />
            <FeatureCard
              icon={Leaf}
              title="Regenerative Agriculture"
              description="Sustainable farming practices that enhance soil health and carbon sequestration."
              delay={0.4}
            />
            <FeatureCard
              icon={Factory}
              title="Energy Efficiency"
              description="Projects focused on reducing energy consumption and improving efficiency."
              delay={0.5}
            />
            <FeatureCard
              icon={Car}
              title="Transportation Efficiency"
              description="Initiatives to reduce emissions in transportation and logistics."
              delay={0.6}
            />
            <FeatureCard
              icon={Recycle}
              title="Waste Management"
              description="Sustainable waste management and recycling projects."
              delay={0.7}
            />
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Development Process
          </motion.h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <ProcessStep
              number="1"
              title="Project Design"
              description="Preparation of Project Design Document (PDD) and engagement with stakeholders."
              delay={0.2}
            />
            <ProcessStep
              number="2"
              title="Benefit Sharing Agreements"
              description="Establishment of agreements with IPLCs, local operators/suppliers, and government entities."
              delay={0.3}
            />
            <ProcessStep
              number="3"
              title="Validation"
              description="Project validation by approved validation/verification bodies (VVBs)."
              delay={0.4}
            />
            <ProcessStep
              number="4"
              title="Registration"
              description="Project registration with appropriate carbon standard."
              delay={0.5}
            />
            <ProcessStep
              number="5"
              title="Implementation"
              description="Project execution and monitoring, reporting, and verification (MRV)."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Carbon Finance Page
export const CarbonFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <PageHeader
        title="Carbon Finance"
        description="Innovative stream financing solutions to scale high-integrity carbon credits projects and accelerate global climate action."
      />

      {/* Stream Financing Overview */}
      <div className="relative py-24 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">Stream Financing</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                Carbon streaming provides upfront financing for development of carbon projects in exchange for future carbon credit streams. This innovative approach enables project development while ensuring long-term value creation.
              </p>
              <ul className="space-y-4">
                {[
                  "Upfront deposit for project development",
                  "Right to purchase future carbon credits",
                  "Ongoing delivery payments",
                  "Benefits flow back to local communities",
                  "Alignment with UN Sustainable Development Goals"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center text-white"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Secure Finance</h4>
                    <p className="text-gray-600">Better financing terms and access to capital</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LineChart className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Risk Management</h4>
                    <p className="text-gray-600">Manage future price and revenue risk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Community Impact</h4>
                    <p className="text-gray-600">Support for local communities and stakeholders</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Carbon Credits Offtake Page
export const CarbonCreditsOfftake = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
      <PageHeader
        title="Carbon Credits Offtake"
        description="Enabling project developers to bring their projects to bankable feasibility with guaranteed future demand."
      />

      {/* Offtake Benefits */}
      <div className="relative py-24 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Advantages of Offtake Agreements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Building2}
              title="Secure Financing"
              description="Access better financing terms and attract lower risk equity or debt capital."
              delay={0.2}
            />
            <FeatureCard
              icon={LineChart}
              title="Revenue Certainty"
              description="Manage future price risk with predetermined volume and pricing agreements."
              delay={0.3}
            />
            <FeatureCard
              icon={Users}
              title="Strategic Partnership"
              description="Negotiate terms and select preferred counterparts for long-term collaboration."
              delay={0.4}
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-24 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Project's Future?
          </h2>
          <p className="text-xl text-green-100 mb-12">
            Let's discuss how our offtake agreements can help bring your carbon project to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors shadow-lg"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
