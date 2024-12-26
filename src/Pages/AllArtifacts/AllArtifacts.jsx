import React, { useEffect, useState } from 'react';
import ArtifactCard from '../ArtifactCard';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState()
    const [search,setSearch]=useState('')
        useEffect(()=>{
            fetch(`http://localhost:5000/artifacts?searchParam=${search}`)
            .then(res=>res.json())
            .then(data=>{
                setArtifacts(data)
            })
        },[search])
    return (
        <div>
            <div className='flex justify-center mb-5'>
            <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="search by name" name='search' className="input border-blue-600  input-bordered w-full max-w-xs" />
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {artifacts?.map((artifact) => (
                    <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
                ))}
            </div>
            
        </div>
    );
};

export default AllArtifacts;