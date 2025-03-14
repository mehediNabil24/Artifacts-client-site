import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ heading, subheading }) => {
  return (
    <motion.div
      className="w-full md:w-5/12 mx-auto text-center my-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-gray-500 tracking-widest mb-2 uppercase">
        ...{subheading}...
      </p>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
        {heading}
        <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-gradient-to-r from-[#F3D0D7] to-[#FFEFEF] rounded-full"></span>
      </h3>
    </motion.div>
  );
};

export default SectionTitle;
