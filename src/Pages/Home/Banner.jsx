import React from 'react';
import image1 from '../../assets/artifacts-6932555_640.jpg'
import image2 from '../../assets/clock-908444_1280.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={image2}
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Artifacts from Ancient Civilizations"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Discover Ancient Artifacts</h1>
            <p className="mt-2 text-sm md:text-lg">
              Explore rare collections from around the world
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Explore Now</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide2" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={image1}
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Cultural Heritage Exhibit"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Preserve Cultural Heritage</h1>
            <p className="mt-2 text-sm md:text-lg">
              A glimpse into the lives of our ancestors
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Learn More</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide3" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Artifact Preservation Programs"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Preservation for Future Generations</h1>
            <p className="mt-2 text-sm md:text-lg">
              Join us in safeguarding history
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Join Us</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide4" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full h-auto md:h-[500px] object-cover"
          alt="Exhibit Artifacts"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Experience Timeless Artifacts</h1>
            <p className="mt-2 text-sm md:text-lg">
              Witness history come alive in every piece
            </p>
            <button className="mt-4 btn btn-primary sm:btn-sm md:btn-md">Visit Us</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle sm:btn-sm">❮</a>
          <a href="#slide1" className="btn btn-circle sm:btn-sm">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
