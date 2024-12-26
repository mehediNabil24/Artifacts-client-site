import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import LikedArtifactCard from './LikedArtifactCard';
import { AuthContext } from '../../Context/AuthProvider';

const LikedArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [artifacts, setArtifacts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://artifacts-server-site.vercel.app/users/${user.email}`, { withCredentials: true })
            .then(res => setArtifacts(res.data))
            .catch(err => console.error(err));
    }, [user.email]);

    return (
        <div>
            {artifacts.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>No artifacts found. Start exploring and liking artifacts!</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                    {artifacts.map(artifact => (
                        <LikedArtifactCard key={artifact._id} artifact={artifact} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedArtifacts;
