import React from 'react';
import { NavLink } from 'react-router-dom';

const ArtifactCard = ({artifact}) => {
    const {_id,artifactName,artifactImage,historicalContext} =artifact;
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={artifactImage} alt="Visa pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {artifactName}
            {/* <div className="badge badge-neutral">{visaType}</div> */}
          </h2>
          <p>{historicalContext}</p>
          <div className="card-actions justify-end">
            <NavLink className={"btn"} to={`/artifactDetails/${_id}`}>
              Artifact Details
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default ArtifactCard;