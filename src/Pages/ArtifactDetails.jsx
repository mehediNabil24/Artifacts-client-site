import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Importing React Icons
import { AuthContext } from '../Context/AuthProvider';

const ArtifactDetails = () => {
    const {user} =useContext(AuthContext)
  const {
    _id,
    artifactImage,
    addedAt,
    artifactName,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
  } = useLoaderData();

  // State for toggling the favorite icon
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to handle toggle
  const handleToggleFavorite = async() => {
    setIsFavorite(!isFavorite);

    try {
        if (!isFavorite) {
            // Add to favorites
            const response = await fetch(`http://localhost:5000/users/favorites`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user?.email, // Logged-in user's email
                    artifactId: _id, // Current artifact ID
                    artifactName: artifactName,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Added to favorites:', data);
                setIsFavorite(true); // Update the UI state
            } else {
                console.error('Error adding to favorites:', data.message);
            }
        } else {
            // Remove from favorites
            const response = await fetch(`http://localhost:5000/users/favorites`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user?.email, // Logged-in user's email
                    artifactId: _id, // Current artifact ID
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Removed from favorites:', data);
                setIsFavorite(false); // Update the UI state
            } else {
                console.error('Error removing from favorites:', data.message);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6 relative">
        {/* Favorite Icon */}
       

        {/* Artifact Image */}
        <div className="flex justify-center">
          <img
            src={artifactImage}
            alt={artifactName}
            className="rounded-lg w-full max-h-96 object-cover"
          />
        </div>

        {/* Artifact Information */}
        <div className="mt-6 flex justify-between items-center" >
          <div>
          <h1 className="text-3xl font-bold text-gray-800">{artifactName}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Added on: {new Date(addedAt).toLocaleDateString()}
          </p>
          </div>
          <div>
            {/* Favorite Icon */}
        <button
          onClick={handleToggleFavorite}
          className=" text-2xl text-gray-500 hover:text-red-500 transition"
          aria-label="Toggle Favorite"
        >
          {isFavorite ? (
            <AiFillHeart /> // Filled heart icon for favorite
          ) : (
            <AiOutlineHeart /> // Outline heart icon for not favorite
          )}
        </button>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Type:</h3>
            <p className="text-gray-600">{artifactType}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Historical Context:</h3>
            <p className="text-gray-600">{historicalContext}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Created At:</h3>
            <p className="text-gray-600">{createdAt}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Discovered At:</h3>
            <p className="text-gray-600">{discoveredAt}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Discovered By:</h3>
            <p className="text-gray-600">{discoveredBy}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Present Location:</h3>
            <p className="text-gray-600">{presentLocation}</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
