import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
      <nav className="flex justify-center items-center p-6 bg-green-900 text-white">
          <ul className="flex space-x-12 ">
              <li>
                  <NavLink to="/" className="hover:underline">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/about" className="hover:underline">About Us</NavLink>
              </li>
              <li>
                  <NavLink to="/about" className="hover:underline">Our Services</NavLink>
              </li>
              
              <li>
                  <NavLink to="/services" className="hover:underline">Testimonals</NavLink>
              </li>
              <li>
                  <NavLink to="/services" className="hover:underline">Blog</NavLink>
              </li>
              <li>
                  <NavLink to="/contact" className="hover:underline">Contact</NavLink>
              </li>
          </ul>
      </nav>
  )
}

export default Header
