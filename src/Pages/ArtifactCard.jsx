import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const ArtifactCard = ({ artifact }) => {
  const { _id, artifactName, artifactImage, historicalContext } = artifact;
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Fetch favorite count when component mounts
  useEffect(() => {
    const fetchFavoriteCount = async () => {
      try {
        const response = await fetch(
          `https://artifacts-server-site.vercel.app/artifacts/${_id}/favorites-count`
        );
        const data = await response.json();
        if (response.ok) {
          setFavoriteCount(data.count);
        } else {
          console.error("Error fetching favorite count:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchFavoriteCount();
  }, [_id]);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <div className="relative ">
        <motion.img
          src={artifactImage}
          alt={artifactName}
          className="w-full h-64 object-cover p-6 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 right-6 bg-white p-2 rounded-md flex items-center shadow-md">
          <FaHeart className="text-red-500 text-lg" />
          <span className="text-sm text-gray-600 ml-1">{favoriteCount}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800">{artifactName}</h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {historicalContext}
        </p>

        {/* Button */}
        <div className="mt-4 flex justify-between items-center">
          <NavLink
            to={`/artifactDetails/${_id}`}
            className="flex items-center bg-[#F0EBE3] text-black  px-4 py-2 rounded-lg shadow-md transition-all hover:bg-[#F6F5F2]"
          >
            View Details <FaArrowRight className="ml-2" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactCard;
