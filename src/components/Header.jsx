import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaHamburger } from "react-icons/fa";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu
    };

    return (
        <nav className="bg-black p-6 text-white">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img className="h-20 w-auto flex" src={logo} alt="CEO" />
                </Link>

                <div>
                    {/* Toggle menu button */}
                    <div className="md:hidden text-2xl">
                        <FaHamburger
                            id="menu-toggle"
                            className="text-white hover:text-yellow-500 transition delay-50 duration-300 ease-in-out"
                            onClick={toggleMenu}
                        />
                    </div>

                    <div className="hidden md:flex space-x-6 text-3xl">
                        <Link to="/" className="font-bebas hover:text-yellow-500 transition delay-150 duration-300 ease-in-out">Home</Link>
                        <Link to="/MyArtWork" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">MyArtWork</Link>
                        <Link to="/Myworkpage" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">MyWork</Link>
                        <Link to="/Certifi" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Certificate</Link>
                        <Link to="/Myteam" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Teamate</Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden flex flex-col items-center text-xl space-y-4 pt-4 transition-all duration-500 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <Link to="/" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Home</Link>
                <Link to="/MyArtWork" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">MyArtWork</Link>
                <Link to="/Myworkpage" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">MyWork</Link>
                <Link to="/Certifi" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Certificate</Link>
                <Link to="/Myteam" className="font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Teamate</Link>
            </div>
        </nav>
    );
}

export default Header;
