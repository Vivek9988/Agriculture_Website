import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../ContextApi/AuthContext";

const Header = () => {
    const { user } = useAuth();

    return (
        <nav className="flex justify-center items-center p-6 bg-green-900 text-white">
            <ul className="flex space-x-12">
                <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
                <li><NavLink to="/About" className="hover:underline">About Us</NavLink></li>
                <li><NavLink to="/OurServices" className="hover:underline">Our Services</NavLink></li>
                <li><NavLink to="/Testimonals" className="hover:underline">Testimonals</NavLink></li>
                <li><NavLink to="/Vlog" className="hover:underline">Vlog</NavLink></li>
                <li><NavLink to="/Contact" className="hover:underline">Contact</NavLink></li>
                <li>
                    {user ? (
                        <span className="font-bold">Hi, {user.name}</span>
                    ) : (
                        <NavLink to="/Signup" className="hover:underline">Signup</NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Header;
