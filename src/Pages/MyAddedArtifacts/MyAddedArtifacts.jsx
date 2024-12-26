import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import MyAddedCard from "./MyAddedCard";

const MyAddedArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const { user } = useContext(AuthContext); // Access the user context
    const navigate = useNavigate(); // Hook to navigate the user
    const createdBy = user?.email;

    useEffect(() => {
        // If user is not authenticated, redirect to login page
        if (!user || !user.email) {
            navigate("/login"); // Redirect to login page
            return; // Exit useEffect early if user is not authenticated
        }

        const fetchArtifacts = async () => {
            try {
                const response = await axios.get(
                    `https://artifacts-server-site.vercel.app/artifacts/email/${createdBy}`,
                    {
                        withCredentials: true, // Include cookies (if using cookies for JWT)
                    }
                );
                setArtifacts(response.data); // Set the fetched artifacts
            } catch (error) {
                console.error("Error fetching artifacts:", error);
                if (error.response && error.response.status === 401) {
                    // If unauthorized (401), redirect to login page
                    navigate("/login");
                }
            }
        };

        fetchArtifacts();
    }, [user, navigate, createdBy]); // Add `navigate` and `createdBy` as dependencies

    return (
        <div>
            {artifacts?.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>No artifacts added yet. Start creating your own artifacts!</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    {artifacts.map((artifact) => (
                        <MyAddedCard
                            key={artifact._id}
                            artifact={artifact}
                            setArtifacts={setArtifacts}
                            artifacts={artifacts}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAddedArtifacts;
