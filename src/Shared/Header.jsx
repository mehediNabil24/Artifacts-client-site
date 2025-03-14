import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-archeology-48.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaUserLarge } from "react-icons/fa6";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const createdBy = user?.email;
  const email = user?.email;

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifact</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#F0EBE3] shadow-md backdrop-blur-md bg-opacity-10 ">
      <div className="w-11/12 mx-auto">
        <div className="navbar text-gray-800 p-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow text-black"
              >
                {links}
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button" className="m-1">
                    My Profile
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-slate-500 rounded-box z-50 w-52 p-2 shadow"
                  >
                    <li>
                      <Link to={`/myAddedArtifacts/${createdBy}`}>My Added Artifacts</Link>
                    </li>
                    <li>
                      <Link to={`/likedArtifacts/${email}`}>Liked Artifacts</Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            <img className="rounded-full w-[65px]" src={logo} alt="Logo" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal justify-center items-center px-1">
              {links}
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="m-1">
                  My Profile
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-slate-500 rounded-box z-50 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={`/myAddedArtifacts/${createdBy}`}>My Added Artifacts</Link>
                  </li>
                  <li>
                    <Link to={`/likedArtifacts/${email}`}>Liked Artifacts</Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center justify-center gap-2">
              {user?.email ? (
                <div className="flex flex-col items-center justify-center mr-2">
                  <p>{user.displayName}</p>
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={user.photoURL}
                    alt="User"
                  />
                </div>
              ) : (
                <FaUserLarge className="text-2xl" />
              )}
              <div>
                {user ? (
                  <button onClick={logOut} className="btn btn-neutral">
                    Log out
                  </button>
                ) : (
                  <NavLink to="/login" className="btn btn-neutral">
                    Log in
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
