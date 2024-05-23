import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

function Header() {
    return (
        <div className="bg-black p-4 text-white flex justify-between items-center">
            <Link to="/" className="flex items-center">
                <img className="h-20 w-auto flex " src={logo} alt="CEO" />
            </Link>
            <div className="space-x-4 text-lg">
                <Link to="/" className="hover:underline font-bebas ">Home</Link>
                <Link to="/MyArtWork" className="hover:underline font-bebas">MyArtWork</Link>
                <Link to="/Myworkpage" className="hover:underline font-bebas">MyWork</Link>
                <Link to="/Myteam" className="hover:underline font-bebas">Teamate</Link>
            </div>
        </div>
    );
}

export default Header;
