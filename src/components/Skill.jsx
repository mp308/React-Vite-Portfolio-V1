import React, { Component } from 'react'
import Timeslinesoftskill from './timeslinesoftskill';
import TimeslineHardskill from './timeslineHardskill';

//react icon
import { FaGithub,FaPython,FaReact ,FaHtml5 ,FaCss3Alt,FaJava,FaNodeJs,FaDocker } from "react-icons/fa"; 
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill,RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus,SiArduino,SiMysql,SiMongodb,SiAdobephotoshop,SiAdobeillustrator,SiAdobepremierepro } from "react-icons/si";



export class Skill extends Component {
  render() {
    return (
      <>
      <div className='text-white'>
      <div className='p-9 rounded-full '>
            <div className="p-9 bg-yellow-900 rounded-t-3xl">
            <h1 className="text-4xl sm:text-6xl lg:text-9xl text-amber-500 pb-8 font-title font-bold">
            ซอฟต์สกิล
            </h1>
            <p className="font-mitr font-thin">
          ทักษะที่ไม่เกี่ยวข้องกับความสามารถทางเทคนิค เป็นสิ่งสำคัญที่ช่วยเสริมสร้างประสิทธิภาพในการทำงานและการมีปฏิสัมพันธ์กับผู้อื่นในองค์กร โดยซอฟต์สกิลนั้นครอบคลุมถึงทักษะการสื่อสาร การทำงานเป็นทีม การแก้ปัญหา ความคิดสร้างสรรค์ ความยืดหยุ่น และความสามารถในการปรับตัว ซึ่งทักษะเหล่านี้มีความสำคัญอย่างมากในยุคปัจจุบันที่มีการเปลี่ยนแปลงอย่างรวดเร็วและไม่แน่นอน
            </p>
            <Timeslinesoftskill/>
            </div>
            
            <div className="p-9 bg-yellow-700 rounded-b-3xl text-right">
            <h1 className="text-4xl sm:text-6xl lg:text-9xl text-amber-500 pb-8 font-title font-bold">
                ฮาร์ทสกิล
            </h1>
            <div className='flex overflow-hidden space-x-4 group'>
              <div className='flex space-x-4 text-5xl pb-7 animate-loopscroll'>
                <FaGithub />
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
                <RiTailwindCssFill />
                <RiFlutterFill />
                <FaPython />
                <FaJava />
                <SiCplusplus />
                <FaNodeJs />
                <SiArduino />
                <SiMysql />
                <SiMongodb />
                <FaDocker />
                <SiAdobephotoshop />
                <SiAdobeillustrator />
                <SiAdobepremierepro />              
              </div>
                       
              <div className='flex space-x-4 text-5xl pb-7 animate-loopscroll' aria-hidden="true">
                <FaGithub />
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
                <RiTailwindCssFill />
                <RiFlutterFill />
                <FaPython />
                <FaJava />
                <SiCplusplus />
                <FaNodeJs />
                <SiArduino />
                <SiMysql />
                <SiMongodb />
                <FaDocker />
                <SiAdobephotoshop />
                <SiAdobeillustrator />
                <SiAdobepremierepro />              
              </div>
            
              <div className='flex space-x-4 text-5xl pb-7 animate-loopscroll' aria-hidden="true">
                <FaGithub />
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
                <RiTailwindCssFill />
                <RiFlutterFill />
                <FaPython />
                <FaJava />
                <SiCplusplus />
                <FaNodeJs />
                <SiArduino />
                <SiMysql />
                <SiMongodb />
                <FaDocker />
                <SiAdobephotoshop />
                <SiAdobeillustrator />
                <SiAdobepremierepro />              
              </div>
              
             </div> 
             

             

            <p className="font-mitr font-thin">
            ทักษะเฉพาะทาง เป็นทักษะที่สามารถวัดและทดสอบได้ ซึ่งในสายงานไอทีนั้นฮาร์ทสกิลมีความสำคัญอย่างมาก เนื่องจากเป็นทักษะที่ใช้ในการทำงานเกี่ยวกับเทคโนโลยีและระบบต่างๆ ตัวอย่างของฮาร์ทสกิลในสายงานไอทีมีดังนี้
            <br />
            Program Python Java C++ Dart JavaScript
            <br />
            Web HTML CSS Tailwind CSS React Vue.js
            <br />
            Backend Node.js MongoDB

            </p>
          
            <TimeslineHardskill/>
            </div>
        </div>
        </div>
      </>
    )
  }
}

export default Skill


//duplicate the logo because loadder can back round
