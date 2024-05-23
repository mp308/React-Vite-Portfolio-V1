import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";

//ส่วน obj/pic
import { FaGithub,FaLine,FaYoutube,FaReact ,FaHtml5 ,FaCss3Alt } from "react-icons/fa"; // icon
import { FaSquareInstagram,FaFacebook, } from "react-icons/fa6"; // icon
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill,RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import fifa from '../assets/images/fifa.png' // pic

const HERO_CONTENT = `this is my web page i love font end dev jub jub 
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Quasi, nisi delectus nobis recusandae porro soluta esse animi 
                      fugit a magnam repellendus ratione placeat nemo laborum 
                      optio quae debitis excepturi. Est.`

const textAnimation = {
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 1,
                            duration: 1
                          }
                        }
                      };

export class Contact extends Component {
  render() {
    

    return (
      <>
      <div className='border-b border-neutral-900 p-8 lg:md-35 bg-[#1a1a1a] text-white'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                  <h1 className='pb-16 text-6xl font-bebas tracking-tight lg:mt-16'>
                    Sanpitch Phuvapaisankit
                  </h1>
                  {/* <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-5xl tracking-tight font-thin  '>
                    Front End Developer
                  </span> old font */ } 
                  <span className='gradient-text text-5xl font-thin text-transparent animate-gradient tracking-tight '>
                    Front End Developer
                  </span>
                  <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT} <span> <ReactTypingEffect
            text={["Welcome to my Portfolio", "อย่าหลอกตัวเอง" , 'มิสเตอร์หมูหยองบ้องกัญชา']}
            // className="mt-5 text-center text-3xl font-title"
          /></span> </p>
                 
                  
                    <h1 className='pt-8 text-5xl font-bebas '>My Contact</h1>
                      <div className='py-8  flex flex-row gap-4 ' style={{ fontSize: '50px' }}>
                        <a href="https://github.com/mp308" className='hover:text-gray-600 transition delay-150 duration-300 ease-in-out'><FaGithub /></a>
                        <a href="https://www.instagram.com/mooyoungbongkancha/?hl=en" className='hover:text-gray-600 transition delay-150 duration-300 ease-in-out'><FaSquareInstagram /></a>
                        <a href="https://www.facebook.com/fifa.rock.90/" className='hover:text-gray-600 transition delay-150 duration-300 ease-in-out'><FaFacebook /></a>
                        <a href="https://line.me/ti/p/fifa.rock123" className='hover:text-gray-600 transition delay-150 duration-300 ease-in-out'><FaLine /></a>
                        <a href="https://www.youtube.com/channel/UC3RbjgmcO_N-HTSRU2cP8Uw" className='hover:text-gray-600 transition delay-150 duration-300 ease-in-out'><FaYoutube /></a>
                      </div>
                      <div className='font-title font-thin pb-20 text-3xl lg:text-left sm:text-center hover:text-gray-600 transition delay-150 duration-300 ease-in-out'>
                        <p>TEL : 0945541469</p>
                        <p>EMAIL : skyfap007@gmail.com</p>
                      </div>
                  </div>
                </div>

              {/* <div className='w-full lg:w-1/3 lg:p-8 relative'>
                <div className='flex justify-center'>
                  <motion.div 
                    className="w-full h-auto"
                    style={{ 
                      backgroundImage: `url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB6NzhzYmFrcmx6N3A3M2J2anVmcG9menFldzJsZ3Y5bDZjdm02aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0NgQ6LjjDqTknAAg/giphy.gif')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: -1,
                    }}
                  />
                  <motion.img 
                    src={fifa} 
                    alt="FIFA" 
                    className="w-full h-auto"
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 0.2,
                    }}
                  />
                </div>
              </div> */}

<div className='w-full lg:w-1/2 lg:p-8 relative flex justify-center items-center'>
              <div className='relative flex justify-center items-center'>
                <div className='absolute inset-0 flex justify-center items-center'>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '1s' }}>
                    <FaGithub className="text-2xl lg:text-4xl text-blue-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '2s' }}>
                    <FaReact className="text-2xl lg:text-4xl text-green-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '3s' }}>
                    <RiFlutterFill className="text-2xl lg:text-4xl text-red-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '4s' }}>
                    <IoLogoJavascript className="text-2xl lg:text-4xl text-yellow-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '5s' }}>
                    <FaHtml5 className="text-2xl lg:text-4xl text-blue-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '6s' }}>
                    <FaCss3Alt className="text-2xl lg:text-4xl text-green-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '7s' }}>
                    <RiTailwindCssFill className="text-2xl lg:text-4xl text-red-500" />
                  </div>
                  <div className="absolute animate-rotate-circle" style={{ animationDelay: '8s' }}>
                    <VscVscode className="text-2xl lg:text-4xl text-yellow-500" />
                  </div>
                </div>
                <div className="rounded-full w-48 h-48 lg:w-96 lg:h-96 bg-white absolute z-0"></div>
                <img src={fifa} alt="FIFA" className='relative z-10 rounded-full w-48 h-48 lg:w-96 lg:h-96 object-cover' />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contact