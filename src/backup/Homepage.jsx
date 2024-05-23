import React, { useLayoutEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Test from '../components/test';

import fifa from "../assets/images/fifa.png"
import logo from "../assets/images/logo.png"


import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import HorizontalScroll from '../components/pre';
import Content from '../components/Myworkcontent';



const textn = `แฟ้มสะสมผลงานพอร์ตโฟลิโอข้าพเจ้าได้จัดทำขึ้นเพื่อเป็นตัวแทนนำเสนอข้อมูลเกี่ยวกับประวัติส่วนตัวความรู้ความสามารถทักษะตลอดจนพัฒนาการด้านต่างๆของข้าพเจ้าโดยแฟ้มสะสมผลงานนี้ประกอบไปด้วยเอกสารเกี่ยวกับประวัติส่วนตัวประวัติการศึกษาและผลงานที่ทำให้ข้าพเจ้าเกิดความภาคภูมิใจ

ข้าพเจ้าหวังว่าแฟ้มสะสมผลงานเล่มนี้จะทำให้ทุกท่านที่ได้อ่านได้เห็นถึงความสามารถโดยรวมของข้าพเจ้าได้มากยิ่งขึ้น

ข้าพเจ้าขอขอบพระคุณคุณพ่อคุณแม่คุณครูเพื่อนๆและผู้มีส่วนร่วมในการให้ความช่วยเหลือให้คำแนะนำรวบรวมเอกสารหลักฐานข้อมูลที่เป็นประโยชน์อย่างยิ่งเพื่อจัดทำแฟ้มสะสมผลงานในครั้งนี้

เหตุผลที่ข้าพเจ้าอยากเข้าคณะนี้เพราะข้าพเจ้ามีความสนใจและมีความตั้งใจในการศึกษาต่อในคณะเพื่อไปประกอบอาชีพที่ข้าพเจ้าต้องการทำในอนาคต `

const Homepage = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.5,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("#welcome", {
        opacity: 0,
        duration: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='relative' ref={comp}>
        <div id='intro-slider'
          className='h-screen p-10 bg-gray-50 absolute top-0 left-0 font-bebas z-10 w-full flex flex-col gap-10 tracking-tight '>
          <h1 id='title-1'
            className='text-4xl md:text-6xl lg:text-9xl '>SANPITCH</h1>
          <h1 id='title-2'
            className='text-4xl md:text-6xl lg:text-9xl '>PHUVAPAISANKIT</h1>
          <h1 id='title-3'
            className='text-4xl md:text-6xl lg:text-9xl '>Graphics & Webdev</h1>
        </div>
      </div>
      <div id='welcome ' className="bg-[#1a1a1a] text-white" >
        <Header />
        <div className="p-8">
          <div className='border-8 border-indigo-600'>
            <h1 className="text-center text-8xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
              My Home . <span className='text-white'>Page</span>  <span className='text-3xl text-white text-mitr'>test</span>
            </h1>
          </div>
          <br />
          <ReactTypingEffect
            text={["Welcome to my Portfolio", "I LOVE YOU 300"]}
            className='flex justify-center text-3xl font-title'
          />
          <div className='flex justify-start py-8'>
            <motion.img
              src={fifa}
              alt="FIFA"
              className="flex size-64"
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
            <div className='px-10'>
              <h4 className='font-mitr text-xl'>คำนำ</h4>
              <p className='font-mitr font-light'>
                {textn}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Content /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
