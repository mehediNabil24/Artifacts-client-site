import React from "react";
import { FaStar, FaFacebook, FaGoogle } from "react-icons/fa";

const InfoSection = () => {
  return (
    <div className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-2 text-lg">Artifacts in the Collection</p>
          </div>
          {/* Card 2 */}
          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="mt-2 text-lg">Historical Periods Covered</p>
          </div>
          {/* Card 3 */}
          <div>
            <h2 className="text-4xl font-bold">1M+</h2>
            <p className="mt-2 text-lg">Visitors Engaged Globally</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 border-t border-white/20 pt-4 flex flex-wrap justify-center space-x-6">
          {/* Review 1 */}
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400 w-6 h-6" />
            <span className="text-lg">Rating 4.9</span>
          </div>
          {/* Review 2 */}
          <div className="flex items-center space-x-2">
            <FaFacebook className="text-blue-500 w-6 h-6" />
            <span className="text-lg">Followers 4.6K</span>
          </div>
          {/* Review 3 */}
          <div className="flex items-center space-x-2">
            <FaGoogle className="text-red-500 w-6 h-6" />
            <span className="text-lg">Reviews 4.3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
