import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../Shared/SectionTitle';

const Gallery = () => {
  const images = [
    "/gallery1.jpg",
    "/gallery6.jpg",
    "/alexander-schimmeck-gUtcrNunbCM-unsplash(1).jpg",
    "/syed-ahmad-qu4kL-4wykA-unsplash.jpg",
    "/tanner-mardis-xUXGHzhIbN4-unsplash(1).jpg",
    "/trnava-university-uKtCug0SKuk-unsplash.jpg",
  ];

  const hoverVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  };

  return (
    <div>
      <SectionTitle heading={'Gallery'} subheading={'Explore The Gallery'} />

      <div className="grid grid-cols-1 md:grid-cols-3  py-10">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            variants={hoverVariants}
            whileHover="hover"
          >
            <img src={img} alt={`Image ${index + 1}`} className="w-full h-[250px] object-cover" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg font-semibold">Explore Image {index + 1}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
