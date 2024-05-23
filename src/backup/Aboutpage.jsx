import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skill from "../components/Skill";
import fifa from "../assets/images/fifa.png"

import { motion } from "framer-motion";

function About() {
    return (
        <>
            <Header/>
            {/* <img src={fifa} alt="FIFA" className="flex size-64" /> */}
            
           <Skill/>
            <Footer/>
        </>
    );
}

export default About;
