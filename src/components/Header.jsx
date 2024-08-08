import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaHamburger } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = ture
    }

    return (
        <nav className="bg-black p-6 text-white ">

            <div className="flex justify-between items-center">
                <Link to="/" >
                    <img className="h-20 w-auto flex " src={logo} alt="CEO" />
                </Link>

                <div>

                    {/*toggle menu button*/}
                    <div className="md:hidden text-3xl">
                        <FaHamburger id='menu-toggle' className="hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" onClick={toggleMenu} />
                    </div>

                    <div className="hidden md:flex space-x-6 text-3xl ">
                        <Link to="/" className=" font-bebas hover:text-yellow-500 transition delay-150 duration-300 ease-in-out " >Home</Link>
                        <Link to="/MyArtWork" className=" font-bebas  hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" >MyArtWork</Link>
                        <Link to="/Myworkpage" className=" font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" >MyWork</Link>
                        <Link to="/Myteam" className=" font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" >Teamate</Link>
                    </div>


                </div>

            </div>
            {/*moble menu*/}
            {isMenuOpen ? (
                <div className=" md:hidden flex-row flex justify-center text-2xl space-x-4 pt-4">
                    <Link to="/" className=" font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out " >Home</Link>
                    <Link to="/MyArtWork" className=" font-bebas  hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" >MyArtWork</Link>
                    <Link to="/Myworkpage" className=" font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" >MyWork</Link>
                    <Link to="/Myteam" className=" font-bebas hover:text-yellow-500 transition delay-50 duration-300 ease-in-out" >Teamate</Link>
                </div>
            ) : null}
        </nav>
    );
}

export default Header;
