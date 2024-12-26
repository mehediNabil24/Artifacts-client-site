import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddedCard from './MyAddedCard';

const MyAddedArtifacts = () => {
    const loadedArtifacts = useLoaderData();
    const [artifacts, setArtifacts] = useState(loadedArtifacts);

    return (
        <div>
            {artifacts?.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>No artifacts added yet. Start creating your own artifacts!</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    {artifacts.map(artifact => (
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
