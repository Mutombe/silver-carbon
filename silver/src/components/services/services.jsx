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

  CheckCircle2,
  Users,
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
              Silver Carbon aims to develop carbon assets from project design to carbon credits issuance, covering a wide spectrum
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
              Carbon streaming is the provision of financing for development of carbon projects in exchange for a stream of future cashflows from the project which is called a “stream” .
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
              We enable third party carbon project developers to bring their projects to bankable feasibility stage coupled with the need to bring certainty with regards to demand for their and consequently future revenue.
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


const ProcessDiagram = () => {
  return (
    <div className="relative py-24 bg-white/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Carbon Asset Development Process
        </h3>
        <div className="flex justify-center">
          <img
            src="/asset.png"
            alt="Asset Development Process"
            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

const OfftakeDiagram = () => {
  return (
    <div className="relative py-24 bg-white/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Carbon Credits Offtake Process
        </h3>
        <div className="flex justify-center">
          <img
            src="/credits.png"
            alt="Carbon Credits Offtake Process"
            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Stream = () => {
  return (
    <div className="relative py-24 bg-white/5 backdrop-blur-lg rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Carbon Projects Stream Financing
        </h3>
        <div className="flex justify-center">
          <img
            src="/stream.png"
            alt="Carbon Projects Stream Financing"
            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

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
        description="Silver Carbon aims to develop carbon assets from project design to carbon credits issuance, covering a spectrum including but not limited to the following;"
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

      <ProcessDiagram />

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
              number="1-3"
              title="Project planning phase"
              description="A climate project has a defined life cycle. In the first two steps, the project developer reviews the general feasibility of the project, the project design and the financing. Then, the so-called Project Design Document (PDD) is prepared, which contains all the basic information about the project, such as the project objective, the location, when the project is to be implemented, and the project duration. "
              delay={0.2}
            />
            <ProcessStep
              number="4"
              title="Validation"
              description="In this phase, independent auditors examine the PDD and the information it contains. This phase often also involves field visits with on-site interviews and analyses. Auditors are accredited, impartial assessors who have to be approved as a validation and verification body (VVB) by the standards body. TÜV Nord/Süd, S&A Carbon LLC., and SCS Global Services are just some examples of validation and verification bodies. "
              delay={0.3}
            />
            <ProcessStep
              number="5"
              title="Registration"
              description="Once validated, the project can be registered with a standard such as the Verified Carbon Standard or the Gold Standard. "
              delay={0.4}
            />
            <ProcessStep
              number="6"
              title="Monitoring"
              description="After the climate project has been registered, the monitoring phase begins. Here, the project developers monitor and document the data of the project activities and progress. The duration of the monitoring phase varies from project to project, it can cover two years, but documentation over five or seven years is also possible. "
              delay={0.5}
            />
            <ProcessStep
              number="7"
              title="Verification"
              description="At the end of each monitoring phase, a validation and verification body checks and assesses whether the values and project activities stated in the monitoring report are correct and verifies them. As with validation, visits to the project site are often part of the verification process."
              delay={0.6}
            />
            <ProcessStep
              number="8"
              title="Issuance of verified emission reductions"
              description="Once verified the Carbon Credits that were confirmed in the verification phase can now be issued by the respective  registry"
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
        title="Carbon Projects Stream Financing"
        description="Carbon streaming is the provision of financing for development of carbon projects in exchange for a stream of future cashflows from the project which is called a 'stream'"
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
              A carbon credit stream is a contractual agreement whereby Silver Carbon, as the stream purchaser, makes an upfront deposit (in the form of cash, shares or other consideration) to a project partner, in return for the right to purchase all or a portion of the future carbon credits generated by a project or an asset over the term of the agreement.
              </p>
              <br></br>
              <ul className="space-y-4">
                {[
                  "The project partner may use the upfront deposit to fund the development, expansion or operation of a project or for general corporate purposes.",
                  "Silver Carbon then receives the carbon credits from the project partner and typically pays an ongoing delivery payment, or purchase price per carbon credit, to the project partner when the carbon credits are sold.",
                  "A portion of the purchase price flows back to the project and the local communities.",
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

            <Stream />
            
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
        </div> <OfftakeDiagram />
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
