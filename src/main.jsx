import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Shared/Login.jsx';
import Register from './Shared/Register.jsx';
import AddArtifacts from './Pages/AddArtifacts.jsx';
import AllArtifacts from './Pages/AllArtifacts/AllArtifacts.jsx';
import ArtifactDetails from './Pages/ArtifactDetails.jsx';
import MyAddedArtifacts from './Pages/MyAddedArtifacts/MyAddedArtifacts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element :<Register></Register> 
      },
      {
        path: '/addArtifacts',
        element: <AddArtifacts></AddArtifacts>
      },
      {
        path: '/artifactDetails/:id',
        element: <ArtifactDetails></ArtifactDetails>,
        loader:({params})=> fetch(`http://localhost:5000/artifacts/${params.id}`)
      },
      {
        path: '/allArtifacts',
        element: <AllArtifacts></AllArtifacts>
      },
      {
        path:'/myAddedArtifacts/:createdBy',
        element: <MyAddedArtifacts></MyAddedArtifacts>,
        loader:({params})=> fetch(`http://localhost:5000/artifacts/email/${params.createdBy}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
