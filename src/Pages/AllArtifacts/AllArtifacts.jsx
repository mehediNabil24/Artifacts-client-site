import React, { useEffect, useState } from 'react';
import ArtifactCard from '../ArtifactCard';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState()
        useEffect(()=>{
            fetch('http://localhost:5000/artifacts')
            .then(res=>res.json())
            .then(data=>{
                setArtifacts(data)
            })
        },[])
    return (
        <div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {artifacts?.map((artifact) => (
                    <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                ))}
            </div>
            
        </div>
    );
};

export default AllArtifacts;