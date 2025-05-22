import React from 'react';
import ReactDOM from 'react-dom/client';
//import { AuthProvider } from './ContextApi/AuthContext.jsx';
import { AuthProvider } from './ContextApi/AuthContext.jsx'; // ✅ Import the provider

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './Layout.jsx';
import About from './HeaderComponent/About.jsx';
import './index.css';
import Home from './Components/Home.jsx';
import OurServices from './HeaderComponent/OurServices.jsx';
import Testimonials from './HeaderComponent/Testimonals.jsx';
import Contact from './HeaderComponent/Contact.jsx';
import Vlog from './HeaderComponent/Vlog.jsx';
import Signup from './HeaderComponent/Signup.jsx';
import ChatBox from './HomeComponent/ChatBox.jsx';
import Soil from './HomeComponent/Soil.jsx';
import WeatherComponent from './HomeComponent/WeatherComponent.jsx';
import YieldPrediction from './HomeComponent/YieldPrediction.jsx'
import FarmEducation from './HomeComponent/FarmEducation.jsx';
import SeedCalculator from './HomeComponent/SeedCalculator.jsx';
import IrrigationManagement from './HomeComponent/IrrigationManagement.jsx';
import CommunityGarden from './HomeComponent/CommunityGarden.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    // ✅ Wrap Layout with AuthProvider
    <Route
      path="/"
      element={
        <AuthProvider>
          <Layout />
        </AuthProvider>
      }
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="OurServices" element={<OurServices />} />
      <Route path="Testimonals" element={<Testimonials />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Vlog" element={<Vlog />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="ChatBox" element={<ChatBox />} />
      <Route path="Soil" element={<Soil/>} />
      <Route path="WeatherComponent" element={<WeatherComponent/>} />
      <Route path="YieldPrediction" element={<YieldPrediction />} />
      <Route path="FarmEducation" element={<FarmEducation />} />
      <Route path="SeedCalculator" element={<SeedCalculator/>} />
      <Route path="IrrigationManagement" element={<IrrigationManagement/>} />
      <Route path="CommunityGarden" element={<CommunityGarden />} />



     
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
