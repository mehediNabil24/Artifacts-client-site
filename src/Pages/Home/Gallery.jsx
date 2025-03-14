import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const Gallery = () => {
  const images = [
      "/../public/gallery1.jpg",
      "/../public/gallery6.jpg",
      "/../public/alexander-schimmeck-gUtcrNunbCM-unsplash(1).jpg",
      "/../public/syed-ahmad-qu4kL-4wykA-unsplash.jpg",
      "/../public/tanner-mardis-xUXGHzhIbN4-unsplash(1).jpg",
      "/../public/trnava-university-uKtCug0SKuk-unsplash.jpg",
      
  ];

  return (
    <div>
        <SectionTitle heading={'Gallery'} subheading={'Explore The Gallery'}></SectionTitle>
    <div className="grid grid-cols-3 py-10">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden  shadow-md">
          <img
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-[200px] object-cover"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
