import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
    // useEffect(() => {
    //     const handleMouseOver = event => {
    //         let iteration = 0;
    //         const letters = "abcdefghijklmnopqrstuvwxyz";
    //         let interval = setInterval(() => {
    //             event.target.innerText = event.target.innerText
    //                 .split("")
    //                 .map((letter, index) => {
    //                     if(index < iteration) {
    //                         return event.target.dataset.value[index];
    //                     }
    //                     return letters[Math.floor(Math.random() * 26)];
    //                 })
    //                 .join("");

    //             if(iteration >= event.target.dataset.value.length){ 
    //                 clearInterval(interval);
    //             }

    //             iteration += 1 / 5;
    //         }, 30);
    //     };

    //     const hoverElements = document.querySelectorAll(".hover-effect");
    //     hoverElements.forEach(element => {
    //         element.addEventListener("mouseover", handleMouseOver);

    //         return () => {
    //             element.removeEventListener("mouseover", handleMouseOver);
    //         };
    //     });
    // }, []);

    return (
        <div className="bg-black p-6 text-white flex justify-between items-center">
            <Link to="/" className="flex items-center">
                <img className="h-20 w-auto flex " src={logo} alt="CEO" />
            </Link>
            <div className="space-x-6 text-3xl">
                <Link to="/" className="hover:underline font-bebas hover-effect" data-value="Home">Home</Link>
                <Link to="/MyArtWork" className="hover:underline font-bebas hover-effect" data-value="MyArtWork">MyArtWork</Link>
                <Link to="/Myworkpage" className="hover:underline font-bebas hover-effect" data-value="MyWork">MyWork</Link>
                <Link to="/Myteam" className="hover:underline font-bebas hover-effect" data-value="Teamate">Teamate</Link>
            </div>
        </div>
    );
}

export default Header;
