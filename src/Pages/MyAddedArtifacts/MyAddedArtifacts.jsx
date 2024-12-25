import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddedCard from './MyAddedCard';

const MyAddedArtifacts = () => {
    const loadedArtifacts =useLoaderData();
    const [artifacts,setArtifacts] =useState(loadedArtifacts)
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 '>
            {
                artifacts?.map(artifact=><MyAddedCard artifact={artifact} setArtifacts={setArtifacts} artifacts={artifacts} key={artifact._id} ></MyAddedCard>)
            }
            
        </div>
    );
};

export default MyAddedArtifacts;