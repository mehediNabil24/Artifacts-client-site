import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ArtifactDetails = () => {
    const {artifactImage,addedAt, artifactName,artifactType,historicalContext,createdAt,discoveredAt,discoveredBy,presentLocation} =useLoaderData()
       
    
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Artifact Image */}
        <div className="flex justify-center">
          <img
            src={artifactImage}
            alt={artifactName}
            className="rounded-lg w-full max-h-96 object-cover"
          />
        </div>

        {/* Artifact Information */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {artifactName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Added on: {new Date(addedAt).toLocaleDateString()}
          </p>
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