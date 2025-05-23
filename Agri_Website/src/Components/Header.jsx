import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../ContextApi/AuthContext";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const { user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-green-800 to-green-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo placeholder - replace with your logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="flex items-center">
                            <span className="text-2xl font-bold text-white">🌱 FarmAI</span>
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium transition-all 
                                ${isActive ? 'bg-green-600 shadow-md' : 'hover:bg-green-700 hover:shadow-sm'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium transition-all 
                                ${isActive ? 'bg-green-600 shadow-md' : 'hover:bg-green-700 hover:shadow-sm'}`
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/OurServices"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium transition-all 
                                ${isActive ? 'bg-green-600 shadow-md' : 'hover:bg-green-700 hover:shadow-sm'}`
                            }
                        >
                            Our Services
                        </NavLink>
                        <NavLink
                            to="/Testimonals"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium transition-all 
                                ${isActive ? 'bg-green-600 shadow-md' : 'hover:bg-green-700 hover:shadow-sm'}`
                            }
                        >
                            Testimonials
                        </NavLink>
                        <NavLink
                            to="/Vlog"
                            className={({ isActive }) =>
                                `text-white px-3 py-2 rounded-md text-sm font-medium transition-all 
                                ${isActive ? 'bg-green-600 shadow-md' : 'hover:bg-green-700 hover:shadow-sm'}`
                            }
                        >
                            Vlog
                        </NavLink>
                    </nav>

                    {/* User/Signup Section */}
                    <div className="hidden md:block">
                        {user ? (
                            <div className="flex items-center space-x-2">
                                <span className="text-white font-medium">Hi, {user.name}</span>
                                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                to="/Signup"
                                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-all"
                            >
                                Sign Up
                            </NavLink>
                        )}
                    </div>

                    
                </div>
            </div>

           
            
        </header>
    );
};

export default Header;