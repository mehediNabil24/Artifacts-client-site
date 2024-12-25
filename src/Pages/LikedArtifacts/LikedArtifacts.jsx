import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import LikedArtifactCard from './LikedArtifactCard';

const LikedArtifacts = () => {
    const loadedArtifacts = useLoaderData();
    const [artifacts,setArtifacts] =useState(loadedArtifacts)
    return (
        <div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            {artifacts?.map((artifact) => (
                <LikedArtifactCard key={artifact._id} artifact={artifact}></LikedArtifactCard>
            ))}
        </div>
        
    </div>
    );
};

export default LikedArtifacts;