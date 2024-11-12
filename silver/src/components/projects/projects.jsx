import React from 'react';
import { color, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Afforestation in Zimbabwe',
      description: 'Developing a large-scale afforestation project to restore degraded forest lands and generate high-quality carbon credits.',
      image: '/af2.jpg'
    },
    {
      title: 'Regenerative Agriculture in Kenya',
      description: 'Implementing sustainable farming practices to enhance soil carbon sequestration and improve community livelihoods.',
      image: '/ag1.jpg'
    },
    {
      title: 'Waste-to-Energy in South Africa',
      description: 'Constructing a waste-to-energy facility to divert organic waste from landfills and generate renewable electricity.',
      image: '/waste.jpg'
    },
    {
      title: 'Biodiversity Conservation in Uganda',
      description: 'Protecting and restoring critical habitats to safeguard endangered species and generate verified carbon credits.',
      image: '/21.avif'
    }
  ];

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
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Silver Carbon ongoing and future projects
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Desclaimer: <br></br><strong style={{textEmphasisColor: "red",}} className='text-red-500'>The projects content is being updated.</strong>
          </motion.p>
        </div>
        {/*<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="bg-gray-50 overflow-hidden shadow rounded-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-base text-gray-500">{project.description}</p>
              </div>
              <div className="bg-gray-100 px-6 py-4">
                <Link
                  to="/projects"
                  className="text-green-600 font-medium hover:text-green-800 flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>*/}
      </div>
    </div>
  );
};

export default Projects;