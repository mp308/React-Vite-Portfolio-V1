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
          <img src={Flower} alt="Flower" className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" />
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
          <img src={Cercel} alt="Cercel" className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
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
          <img src={Circle} alt="Circle" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28" />
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
          <img src={Som} alt="Som" className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" />
        </motion.div>


        <div className="mb-8">
          <span className="inline-block bg-[#1685b8] rounded-full px-4 py-2 text-2xl md:text-3xl font-bebas text-white shadow-lg">
            Sanpitch Phuvapaisankit
          </span>
        </div>
        <div className="text-center space-y-6">
          <div className="text-6xl text-yellow-50 font-bold 2xl:text-9xl">
            <div className="mb-4">
              I'm <span className="inline-block text-6xl 2xl:text-9xl"><ReactTypingEffect
                text={["an Intern student", "a UX/Ui Designer", "a FrontEnd Dev"]}
              /></span>
            </div>
          </div>
          <div className="text-l md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            I am seeking a UX/UI Design and FrontEnd Intern position to apply my skills and knowledge in a real-world setting.
          </div>
        </div>
        <div className="mt-48 text-5xl lg:text-7xl text-yellow-50 animate-bounce">
          <RxDoubleArrowDown />
        </div>
      </div>
    );
  }
}

export default WelcomBanner;
