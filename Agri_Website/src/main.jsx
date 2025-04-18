import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './HeaderComponent/About.jsx';
import './index.css';
import Home from './Components/Home.jsx';
import OurServices from './HeaderComponent/OurServices.jsx';
import Testimonials from './HeaderComponent/Testimonals.jsx';
import Contact from './HeaderComponent/Contact.jsx';
import Vlog from './HeaderComponent/Vlog.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path="about" element={<About />} />
      <Route path="/OurServices" element={<OurServices/>}/>
      <Route path="/Testimonals" element={<Testimonials />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Vlog" element={<Vlog />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
