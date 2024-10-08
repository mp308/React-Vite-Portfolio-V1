// src/components/EV_GIT.js

import React, { Component } from 'react';
import iot1 from '../assets/images/HardSkills/iot1.jpg';
import iot2 from '../assets/images/HardSkills/iot2.jpg';
import iot3 from '../assets/images/HardSkills/iot3.jpg';

import data01 from '../assets/images/HardSkills/data01.jpg';
import data02 from '../assets/images/HardSkills/data02.jpg';
import data03 from '../assets/images/HardSkills/data03.jpg';

import Iot01 from '../assets/images/HardSkills/esp10.jpg';
import Iot02 from '../assets/images/HardSkills/netpie.jpg';
import Iot03 from '../assets/images/HardSkills/wokwi.jpg';
import Iot04 from '../assets/images/HardSkills/moblie.jpg';

export class EV_GIT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/mp308')
      .then(response => response.json())
      .then(user => this.setState({ user }));

    fetch('https://api.github.com/users/mp308/repos')
      .then(response => response.json())
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { user, repos } = this.state;

    return (
      <>
        <div className="p-6 min-h-screen">
          {user && (
            <div className="text-center mb-10">
              <img
                src={user.avatar_url}
                alt="GitHub profile"
                className="rounded-full w-20 h-20 mx-auto mb-4 border-4 border-gray-300" // ลดขนาดของภาพ
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-mitr">{user.name}</h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{user.bio}</p>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl text-center my-8 text-white font-bebas">- My GitHub Repositories -</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {repos.map(repo => (
              <div key={repo.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <h2 className="text-lg md:text-xl font-light text-gray-800 font-bebas">{repo.name}</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block font-bebas text-sm md:text-base"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>

          <div className='text-3xl md:text-4xl text-center my-8 text-white font-bebas'>
            - Project Details -
          </div>
          <div className="space-y-6">

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">mp308.github.io</h2>
              <p className="text-gray-600 text-sm md:text-base font-mitr">
                โปรเจกต์เว็บเพจที่แสดงผลงานของผม โดยพัฒนาโดยใช้ React และ Vite. โปรเจกต์นี้ยังได้เรียนรู้เทคนิคใหม่ ๆ เช่น การใช้ Framer Motion และ GSAP สำหรับการทำแอนิเมชัน, รวมถึงการใช้ Tailwind CSS เพื่อจัดการกับสไตล์ CSS ได้อย่างมีประสิทธิภาพและสะดวกยิ่งขึ้น
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">ARDUINOAPP-MQTTAPI-IOT</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4  font-mitr">
                โปรเจกต์วิชา Design and Development for Internet of Things พัฒนาด้วย ภาษา C บนบอร์ด Arduino ESP32 ซึ่งใช้โมดูลต่าง ๆ ในการรับค่าและ MQTT เพื่อช่วยในการสื่อสารและควบคุมผ่านอินเทอร์เน็ต.
                <br />
                <span className='font-medium'>บอร์ด:</span> Arduino ESP32
                <br />
                <span className='font-medium'>โมดูล:</span> Relay, Flame, LedPin, Buzzer, Temp and Hum, Photo-interrupter, Avoidance
                <br />
                โปรเจกต์นี้มุ่งเน้นการสร้างระบบจำลองห้องพักโดยใช้อุปกรณ์ IoT. ฟีเจอร์หลักของระบบรวมถึง:
                <br />
                - การตรวจสอบการเคลื่อนไหวด้วยโมดูล Avoidance ที่ตรวจจับการเคลื่อนไหวผ่านแสงอินฟราเรด
                <br />
                - การตรวจสอบการเข้าออกห้องผ่านคีย์การ์ดด้วยโมดูล Photo-interrupter
                <br />
                - การตรวจสอบอุณหภูมิและความชื้นด้วยโมดูล Temp and Hum เพื่อแจ้งเตือนระบบไฟไหม้
                <br />
                - การตรวจจับเปลวไฟด้วยโมดูล Flame เพื่อแจ้งเตือนระบบไฟไหม้
                <br />
                - การแจ้งเตือนไฟไหม้ผ่านโมดูล Buzzer
                <br />
                - การแจ้งเตือนสถานะการเข้าห้องด้วยหลอดไฟผ่านโมดูล LedPin
              </p>
              <div className="flex flex-wrap gap-4">
                <img src={iot1} alt="IoT Project 1" className="w-full sm:w-1/4 rounded-lg shadow-md" /> {/* ลดขนาดของภาพ */}
                <img src={iot2} alt="IoT Project 2" className="w-full sm:w-1/4 rounded-lg shadow-md" /> {/* ลดขนาดของภาพ */}
                <img src={iot3} alt="IoT Project 3" className="w-full sm:w-1/4 rounded-lg shadow-md" /> {/* ลดขนาดของภาพ */}
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">DataProfile_Project</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4  font-mitr">
                โปรเจกต์วิชา Big Data Platform and Analytics โดยพัฒนาโดยใช้ Python Spark Pyspak Pandas. โปรเจกต์นี้ยังได้เรียนรู้เทคนิคใหม่ในการทำ Data Profile ทำได้รู้จักหลักการกระทำกับ DataSet ว่าควารจะ ตรวจสอบชุดข้อมูลอย่างไร แกไข้ข้อผิดพลาดอย่างไร และ บันทึกข้อมูลแล้วออกมาวิเคราะห์ทำเป็นกราฟ เพื่อที่จะได้นำข้อมุลต่างๆเอามาใช้ประโยชน์ได้อย่างถูกต้องและครบถ้วน
                <br />
                โดยโปรเจคผมได้เลือกเอา <span className='font-medium'>DataSet Google Play Store App data of 2.3 Million+ applications.</span>  ผมได้นำเอาข้อมูลมาวิเคราะห์และตรวจสอบข้อผิดพลาดต่างๆผ่าน PySpak SQL ในการคิวรีเพื่อเรียกดูข้อมูลและแก้ไข่ผ่านคอมมานที่กำหนดและนำข้อมูลมาวิเคราะห์
              </p>
              <div className="flex flex-wrap gap-4">
                <img src={data01} alt="IoT Project 1" className="w-full sm:w-1/4 rounded-lg shadow-md" /> {/* ลดขนาดของภาพ */}
                <img src={data02} alt="IoT Project 2" className="w-full sm:w-1/4 rounded-lg shadow-md" /> {/* ลดขนาดของภาพ */}
                <img src={data03} alt="IoT Project 3" className="w-full sm:w-1/4 rounded-lg shadow-md" /> {/* ลดขนาดของภาพ */}
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">DARTAPP-MQTTAPI-IOT</h2>
              <p className="text-gray-600 text-sm md:text-base  font-mitr mb-4">
                โปรเจกต์การพัฒนาแอปพลิเคชันโดยใช้ Dart เพื่อรับข้อมูลจาก MQTT และแสดงผลข้อมูลในแอป. แอปนี้อนุญาตให้ผู้ใช้ดูข้อมูลจากโมดูลต่าง ๆ และควบคุมการทำงานของโมดูลเหล่านั้นได้อย่างมีประสิทธิภาพ.
              </p>
              <div className="flex gap-4">
                <img src={Iot04} alt="IoT Project 1" className="w-1/4 rounded-lg shadow-md" />

                <img src={Iot03} alt="IoT Project 3" className="w-1/2 rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">VUEAPP-MQTTAPI-IOT</h2>
              <p className="text-gray-600 text-sm md:text-base font-mitr mb-4">
                โปรเจกต์การพัฒนาเว็บแอปพลิเคชันโดยใช้ Vue เพื่อรับข้อมูลจาก MQTT และแสดงผลข้อมูลบนเว็บ. แอปนี้ช่วยให้ผู้ใช้สามารถดูข้อมูลจากโมดูลต่าง ๆ และควบคุมการทำงานของโมดูลเหล่านั้นได้อย่างสะดวกและมีประสิทธิภาพ.
              </p>
              <div className="flex gap-4">
                <img src={Iot01} alt="IoT Project 1" className="w-1/4 rounded-lg shadow-md" />

                <img src={Iot03} alt="IoT Project 3" className="w-1/2 rounded-lg shadow-md" />
              </div>
            </div>



            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">First-React-FrontEnd</h2>
              <p className="text-gray-600 text-sm md:text-base  font-mitr">
                โปรเจกต์การเรียน React เริ่มต้นสำหรับสร้างเว็บหน้าร้านขายของ มีการให้เลือกซื้อ, การตรวจสอบจำนวนสินค้า, และการคิดบิล
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">MiniStoreServices</h2>
              <p className="text-gray-600 text-sm md:text-base  font-mitr">
                การบ้านวิชา IT Project: โปรเจกต์นี้ใช้ NodeJS เพื่อพัฒนา API ที่รองรับฟังก์ชัน CRUD (Create, Read, Update, Delete) รวมถึงการใช้งานคำสั่ง Get, Post, Put, Patch. เรียนรู้การใช้ Swagger และ Postman เพื่อทดสอบและตรวจสอบการทำงานของ API ว่าสามารถทำงานได้ตามที่คาดหวัง. นอกจากนี้ยังใช้ Prisma ORM เป็นเครื่องมือในการจัดการข้อมูลในฐานข้อมูล MySQL, ทำให้การจัดการข้อมูลเป็นไปอย่างมีประสิทธิภาพและปลอดภัย
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-4 font-bebas">StoreWeb-With-Firebase</h2>
              <p className="text-gray-600 text-sm md:text-base  font-mitr">
                โปรเจกต์พัฒนาเว็บแอปพลิเคชันร้านค้าออนไลน์โดยใช้ React และ Vite ซึ่งมีฟีเจอร์ครบวงจรสำหรับการจัดการร้านค้า รวมถึงการสั่งซื้อสินค้า, การจัดการสินค้าคงคลัง, การเพิ่มและลบสินค้าจากระบบฐานข้อมูล, และการแสดงสินค้าบนหน้าเว็บ. นอกจากนี้ยังมีฟังก์ชันการเข้าสู่ระบบ (Auth) และการสมัครสมาชิก, การแสดงยอดรวมสินค้า, รวมถึงการจัดการข้อมูลและการเก็บข้อมูลผ่าน Google Firebase ที่ช่วยให้ระบบทำงานได้อย่างรวดเร็วและปลอดภัย.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EV_GIT;
