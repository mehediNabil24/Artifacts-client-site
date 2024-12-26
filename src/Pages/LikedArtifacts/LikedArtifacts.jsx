import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import LikedArtifactCard from './LikedArtifactCard';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';

const LikedArtifacts = () => {
    const {user} = useContext(AuthContext)
    // const loadedArtifacts = useLoaderData();
    const [artifacts,setArtifacts] =useState()
    // const axiosSecure = UseAxios();

    useEffect(()=>{
        // fetch(`http://localhost:3000/job-application?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setJobs(data)

        // })
        axios.get(`https://artifacts-server-site.vercel.app/users/${user.email}`,{withCredentials:true})
        .then(res=>console.log(setArtifacts(res.data)))
    },[user.email]);
    // axiosSecure.get(`/https://artifacts-server-site.vercel.app/users/${user.email}`)
    // .then(res=>setArtifacts(res.data));
// );
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