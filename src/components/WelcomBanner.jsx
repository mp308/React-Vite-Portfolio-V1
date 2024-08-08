import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { RxDoubleArrowDown } from "react-icons/rx";
import { motion } from 'framer-motion';
import Cercel from '../assets/images/object/cercle.png';
import Circle from '../assets/images/object/circle-448f73d1.png';
import Flower from '../assets/images/object/flower.png';
import Som from '../assets/images/object/som.png';

export class WelcomBanner extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center pt-32 text-white bg-cover bg-center relative">
        {/* Animated Flower */}
        <motion.div
          className="absolute"
          style={{ top: '13%', left: '13%' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [1, 0.8, 1], rotate: [0, 20, -20, 0, -360, 120] }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <img src={Flower} alt="Flower" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
        </motion.div>

        {/* Animated Cercel */}
        <motion.div
          className="absolute"
          style={{ bottom: '28%', right: '5%' }}
          initial={{ opacity: 0, rotate: 180 }}
          animate={{ opacity: [1, 0.8, 1], rotate: [0, 360] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <img src={Cercel} alt="Cercel" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
        </motion.div>

        {/* Animated Circle */}
        <motion.div
          className="absolute"
          style={{ top: '15%', right: '5%' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [1, 0.8, 1], rotate: [0, 360] }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <img src={Circle} alt="Circle" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
        </motion.div>

        {/* Animated Som */}
        <motion.div
          className="absolute"
          style={{ bottom: '20%', left: '12%' }}
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: [1, 0.8, 1], rotate: [0, -10, 10, 0] }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <img src={Som} alt="Som" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
        </motion.div>

        <div className="mb-8 px-4">
          <span className="inline-block bg-[#1685b8] rounded-full px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bebas text-white shadow-lg">
            Sanpitch Phuvapaisankit
          </span>
        </div>
        <div className="text-center space-y-6 px-4">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-yellow-50 font-bold">
            <div className="mb-4">
              I'm <span className="inline-block"><ReactTypingEffect
                text={["an Intern student", "a UX/Ui Designer", "a FrontEnd Dev"]}
              /></span>
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto px-4">
            I am seeking a UX/UI Design and FrontEnd Intern position to apply my skills and knowledge in a real-world setting.
          </div>
        </div>
        <div className="mt-48 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-yellow-50 animate-bounce">
          <RxDoubleArrowDown />
        </div>
      </div>
    );
  }
}

export default WelcomBanner;
