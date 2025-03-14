import { useEffect, useState } from "react";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import ArtifactCard from "../ArtifactCard";
import Features from "./Features";
import InfoSection from "./InfoSection";
import Gallery from "./Gallery";

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
      {/* ✅ Banner will take full width */}
      <div className="w-full">
        <Banner />
      </div>

      <div>
        <Gallery></Gallery>
      </div>

      {/* ✅ All other content will be centered */}
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:p-10 md: p-4">
          {artifacts?.slice(0, 6).map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <NavLink to={"/allArtifacts"} className={"btn bg-[#F3D0D7]"}>
            See All Artifacts
          </NavLink>
        </div>
        <Features />
        <InfoSection />
      </div>
    </div>
  );
};

export default Home;
