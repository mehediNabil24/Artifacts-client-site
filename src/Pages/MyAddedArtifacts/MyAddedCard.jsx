import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedCard = ({ artifacts, artifact, setArtifacts }) => {
  const { _id, artifactName, artifactImage, historicalContext, artifactType } =
    artifact;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // const auth =getAuth()
    // const user= auth?.currentUser

    // const createdBy = user.email

    const form = e.target;
    const artifactName = form.artifactName.value;
    const artifactImage = form.artifactImage.value;
    const artifactType = form.artifactType.value;
    const historicalContext = form.historicalContext.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const discoveredBy = form.discoveredBy.value;
    const presentLocation = form.presentLocation.value;

    const updateArtifact = {
      artifactName,
      artifactImage,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
    };

    fetch(`https://artifacts-server-site.vercel.app/artifacts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateArtifact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "Update",
            confirmButtonText: "Cool",
          });
        }
      });

    const modal = document.getElementById(_id);
    modal.close();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artifacts-server-site.vercel.app/artifacts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/allArtifacts");
            }
          })
          .catch((error) => {
            console.error("Error deleting artifact:", error);
          });
        const remaining = artifacts?.filter((cof) => cof._id !== _id);
        setArtifacts(remaining);
      }
    });
  };
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          className="w-full h-[250px] object-cover p-6"
          src={artifactImage}
          alt="Visa pic"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {artifactName}
          <div className="badge badge-neutral">{artifactType}</div>
        </h2>
        <p>{historicalContext}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => document.getElementById(_id).showModal()}
            className="btn bg-[#EBE8DB]"
          >
            Update
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete
          </button>
        </div>
        <dialog
          id={_id}
          className="modal modal-bottom sm:modal-middle"
          onClick={(e) => {
            const dialog = document.getElementById(_id);
            if (e.target === dialog) {
              dialog.close(); // Close the modal if clicking outside of the modal content
            }
          }}
        >
          <div className="modal-box">
            <div className="modal-action">
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

                <input
                  className="btn btn-block"
                  type="submit"
                  value="Update Artifact"
                />
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyAddedCard;
