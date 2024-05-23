import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import ErrorPage from './pages/Errorpage';
import About from './backup/Aboutpage';
// import Contactpage from './pages/Contactpage';
import Myartwork from './pages/Myartwork';
import Teampage from './pages/Teampage';
import Mywork from './pages/Mywork';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <ErrorPage/>
  },
  // {
  //   path: "about",
  //   element: <About/>,
  // },
  // {
  //   path: "contact",
  //   element: <Contactpage/>,
  // },
  {
    path: "Myartwork",
    element: <Myartwork/>,
  },
  {
    path: "Myteam",
    element: <Teampage/>,
  },
  {
    path: "Myworkpage",
    element: <Mywork/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
