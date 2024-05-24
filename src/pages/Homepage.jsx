import React, { useLayoutEffect, useRef,useEffect } from 'react';
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
  useEffect(() => {
    document.title = "Sanpitch Port";
  }, []);

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
        <Banner />
        <Contact />
        <Skill />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
