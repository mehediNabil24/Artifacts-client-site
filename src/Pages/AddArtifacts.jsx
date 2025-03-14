import { getAuth } from "firebase/auth";
import React from "react";
import Swal from "sweetalert2";

const AddArtifacts = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const artifactName = form.artifactName.value;
    const artifactImage = form.artifactImage.value;
    const artifactType = form.artifactType.value;
    const historicalContext = form.historicalContext.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const discoveredBy = form.discoveredBy.value;
    const presentLocation = form.presentLocation.value;

    const newArtifact = {
      artifactName,
      artifactImage,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
      //   addedByName: user.displayName,
      //   addedByEmail: user.email,
      addedAt: new Date().toISOString(),
      createdBy: user.email,
    };

    console.log(newArtifact);

    fetch("https://artifacts-server-site.vercel.app/artifacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArtifact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Artifact added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-gray-200 md:p-24 p-8">
      <h2 className="font-bold text-3xl">Add an Artifact</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Artifact Name and Image */}
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              name="artifactName"
              placeholder="Artifact Name"
              required
            />
          </div>
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              name="artifactImage"
              placeholder="Artifact Image URL"
              type="url"
              required
            />
          </div>
        </div>

        {/* Artifact Type */}
        <div>
          <select
            className="input input-bordered w-full"
            name="artifactType"
            required
          >
            <option value="">Select Artifact Type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        {/* Historical Context */}
        <div>
          <textarea
            className="textarea textarea-bordered w-full"
            name="historicalContext"
            placeholder="Historical Context"
            required
          />
        </div>

        {/* Created At and Discovered At */}
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              name="createdAt"
              placeholder="Created At (e.g., 100 BC)"
              required
            />
          </div>
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              name="discoveredAt"
              placeholder="Discovered At (e.g., 1799)"
              required
            />
          </div>
        </div>

        {/* Discovered By and Present Location */}
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              name="discoveredBy"
              placeholder="Discovered By"
              required
            />
          </div>
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              name="presentLocation"
              placeholder="Present Location"
              required
            />
          </div>
        </div>

        {/* Added By (Read-Only) */}
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              //   value={user.displayName || ''}
              placeholder="Your Name"
            />
          </div>
          <div className="md:w-1/2">
            <input
              className="input input-bordered w-full"
              defaultValue={user?.email || ""}
              placeholder="Your Email"
              readOnly
            />
          </div>
        </div>

        <input className="btn btn-block" type="submit" value="Add Artifact" />
      </form>
    </div>
  );
};

export default AddArtifacts;
