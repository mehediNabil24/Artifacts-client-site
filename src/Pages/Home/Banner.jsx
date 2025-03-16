import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import image2 from "../../assets/photos-256889_1280.jpg";
import image1 from "../../../public/slide1.jpg";
import image3 from '../../../public/vidar-nordli-mathisen-Y8Xh7ZJFU5A-unsplash(1).jpg'

const images = [
  {
    src: image2,
    title: "Discover Ancient Artifacts",
    subtitle: "Explore rare collections from around the world",
  },
  {
    src: image1,
    title: "Preserve Cultural Heritage",
    subtitle: "A glimpse into the lives of our ancestors",
  },
  {
    src: image3,
    title: "See The Ancient World",
    subtitle: "We Come From Our Ancestor"
  }

];

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        {images.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.src}
              className="w-full h-[300px] md:h-[500px] object-cover"
              alt={item.title}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <motion.h1
                className="text-3xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {item.title}
              </motion.h1>
              <motion.p
                className="mt-2 text-lg md:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {item.subtitle}
              </motion.p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
