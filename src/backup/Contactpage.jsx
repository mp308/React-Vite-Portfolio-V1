import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'
import fifa from '../assets/images/fifa.png'
import HorizontalScroll from '../components/pre'
import { motion } from 'framer-motion'
import ReactTypingEffect from 'react-typing-effect';


const HERO_CONTENT = `this is my web page i love font end dev jub jub 
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nisi delectus nobis recusandae porro soluta esse animi fugit a magnam repellendus ratione placeat nemo laborum optio quae debitis excepturi. Est.`

export class Contactpage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='border-b border-neutral-900 pb-4 lg:md-35'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                  <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16'>
                    Sanpitch Phuvapaisankit
                  </h1>
                  <span className='bg=gradient-to-r from-pink-500 via-slate-700 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Front End Developer
                  </span>
                  <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                  <ReactTypingEffect
            text={["Welcome to my Portfolio", "อย่าหลอกตัวเอง" , 'มิสเตอร์หมูหยองบ้องกัญชา']}
            // className="mt-5 text-center text-3xl font-title"
          />
                </div>
              </div>
              <div className='w-full lg:w-1/3 lg:p-8 relative'>
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
              </div>
            </div>
        </div>
        
        <HorizontalScroll/>
        <Banner />
        <Footer />
      </>
    )
  }
}

export default Contactpage
