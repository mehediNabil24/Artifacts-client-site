import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddedCard from './MyAddedCard';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthProvider';

const MyAddedArtifacts = () => {
    // const user = useContext(AuthContext)
    // const createdBy = user?.email;
    const loadedArtifacts = useLoaderData()
    const [artifacts, setArtifacts] = useState(loadedArtifacts);

    // useEffect(() => {
    //     if (createdBy) {
    //         axios.get(`http://localhost:5000/artifacts/email/${createdBy}`, { withCredentials: true })
    //         .then(res => {
    //             setArtifacts(res.data);
    //             console.log("Artifacts fetched:", res.data);
    //         })
    //         .catch(err => console.error("Error fetching artifacts:", err));
    //     }
    // }, [createdBy]);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 '>
            {
                artifacts?.map(artifact=><MyAddedCard artifact={artifact} setArtifacts={setArtifacts} artifacts={artifacts} key={artifact._id} ></MyAddedCard>)
            }
            
        </div>
    );
};

export default MyAddedArtifacts;