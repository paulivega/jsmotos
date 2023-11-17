// acá va el router
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'boxicons/css/boxicons.min.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Home from './views/Home.jsx'
import ErrorPage from './views/ErrorPage.jsx'
import About from './views/About.jsx'
import Products from './views/Products.jsx'
import Contact from './views/Contact.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/products",
    element: <Products/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <ErrorPage/>
  },
 
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
