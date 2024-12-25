import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ArtifactCard = ({ artifact }) => {
    const { _id, artifactName, artifactImage, historicalContext } = artifact;

    // State to manage favorite count
    const [favoriteCount, setFavoriteCount] = useState(0);

    // Fetch favorite count when the component mounts
    useEffect(() => {
        const fetchFavoriteCount = async () => {
            try {
                const response = await fetch(`http://localhost:5000/artifacts/${_id}/favorites-count`);
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
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={artifactImage} alt={artifactName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {artifactName}
                </h2>
                <p>{historicalContext}</p>
                <div className="flex justify-between items-center mt-4">
                    {/* Favorite count */}
                    <p className="text-gray-500">❤️ {favoriteCount}</p>
                    <NavLink className={"btn"} to={`/artifactDetails/${_id}`}>
                        Artifact Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;
