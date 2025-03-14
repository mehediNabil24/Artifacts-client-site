import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LikedArtifactCard = ({ artifact }) => {
  const { _id, artifactName, artifactImage, historicalContext } = artifact;

  return (
    <div className="card bg-base-200 shadow-xl hover:bg-base-300">
      <figure>
        <img
          className=" h-[250px] object-cover p-6"
          src={artifactImage}
          alt={artifactName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artifactName}</h2>
        <p>{historicalContext}</p>
        <div className="flex justify-between items-center ">
          <NavLink className={"btn"} to={`/artifactDetails/${_id}`}>
            Artifact Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LikedArtifactCard;
