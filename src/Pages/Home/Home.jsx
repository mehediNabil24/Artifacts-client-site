import { useEffect, useState } from "react";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import ArtifactCard from "../ArtifactCard";
import Features from "./Features";
import InfoSection from "./InfoSection";
// import FeaturedArtifacts from './FeaturedArtifacts';

const Home = () => {
  const [artifacts, setArtifacts] = useState();
  useEffect(() => {
    fetch("https://artifacts-server-site.vercel.app/artifacts")
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
      });
  }, []);
  return (
    <div>
      
      <Banner></Banner>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-8 md:p-16 p-4">
          {artifacts?.slice(0, 6).map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <NavLink to={"/allArtifacts"} className={"btn btn-success"}>
            See All Artifacts
          </NavLink>
        </div>
      </div>
      <Features></Features>
      {/* <FeaturedArtifacts></FeaturedArtifacts> */}
      <InfoSection></InfoSection>
    </div>
  );
};

export default Home;
