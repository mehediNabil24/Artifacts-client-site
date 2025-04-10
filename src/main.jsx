import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Login from "./Shared/Login.jsx";
import Register from "./Shared/Register.jsx";
import AddArtifacts from "./Pages/AddArtifacts.jsx";
import AllArtifacts from "./Pages/AllArtifacts/AllArtifacts.jsx";
import ArtifactDetails from "./Pages/ArtifactDetails.jsx";
import MyAddedArtifacts from "./Pages/MyAddedArtifacts/MyAddedArtifacts.jsx";
import LikedArtifacts from "./Pages/LikedArtifacts/LikedArtifacts.jsx";
import PrivateRoutes from "./Context/PrivateRoutes.jsx";
import ErrorPage from "./Context/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRoutes>
            <AddArtifacts></AddArtifacts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/artifactDetails/:id",
        element: (
          <PrivateRoutes>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://artifacts-server-site.vercel.app/artifacts/${params.id}`
          ),
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/myAddedArtifacts/:createdBy",
        element: (
          <PrivateRoutes>
            <MyAddedArtifacts></MyAddedArtifacts>
          </PrivateRoutes>
        ),
        // loader: ({ params }) =>
        //   fetch(
        //     `https://artifacts-server-site.vercel.app/artifacts/email/${params.createdBy}`
        //   ),
      },
      {
        path: "/likedArtifacts/:email",
        element: (
          <PrivateRoutes>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoutes>
        ),
        // loader: ({params})=> fetch(`https://artifacts-server-site.vercel.app/users/${params.email}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
