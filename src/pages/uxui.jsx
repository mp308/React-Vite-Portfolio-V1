import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerPic5 from '../assets/images/softskills/SA/SA01.jpg';
import BannerPic6 from '../assets/images/softskills/SA/SA GIPC Final Web-04.jpg';

export class Uxui extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-7 font-title">
          <div className="text-xl font-bold mb-4">ซอฟต์สกิล</div>
          <div className="font-light leading-relaxed">
            โปรเจคใหญ่วิชา Information System Analysis and Design
            เป็นการออกแบบหน้าตา UX/UI ของระบบสั่งอาหารในบริเวณร้านอาหารบุฟเฟ่ต์ (อาหารสไตล์เกาหลี) บน Figma
            <br /><br />
            การออกแบบส่วนติดต่อผู้ใช้ (Graphical User Interface)
            <br />
            แอปพลิเคชันเว็บ: หน้าแรก, เข้าสู่ระบบ, การลงทะเบียน, อินเตอร์เฟซหลักของระบบ, แชทบอท, การจองโต๊ะ, ข้อมูลส่วนตัว, การสั่งอาหาร, รายละเอียดคำสั่งซื้อ, แก้ไขคำสั่งซื้อ, การชำระเงิน, การแสดงใบเสร็จ, อินเตอร์เฟซผู้ดูแลระบบ
            <br />
            แอปพลิเคชันมือถือ: อินเตอร์เฟซที่คล้ายกับแอปพลิเคชันเว็บแต่ปรับให้เหมาะสมกับการใช้งานมือถือ
            <br /><br />
            ข้อกำหนดของระบบ
            <br />
            โมดูล: การรับคำสั่งซื้อ, การส่งคำสั่งซื้อ ฯลฯ
            <br />
            ฟังก์ชันการทำงาน: ลูกค้าสามารถสั่งอาหารผ่านแอปพลิเคชันเว็บ ลดข้อผิดพลาดและเพิ่มประสิทธิภาพ ระบบประกอบด้วยการแสดงรายการอาหาร, การติดตามคำสั่งซื้อ, และการจัดการข้อมูลคำสั่งซื้อ
            <br /><br />
            การออกแบบและแผนภาพ
            <br />
            แผนภาพบริบท
            <br />
            แผนภาพการไหลของข้อมูลระดับ 0
            <br />
            แผนภาพ ER
            <br />
            การออกแบบฐานข้อมูล
            <br />
            พจนานุกรมข้อมูล
            <br />
            การจัดรูปแบบฐานข้อมูลให้อยู่ในรูปแบบที่ 3 (NF3)
            <br />
            คำอธิบายความสัมพันธ์และกระบวนการ
            <br />
            ต้นไม้ตัดสินใจและตารางการตัดสินใจ
            <br />
            รายละเอียดการป้อนข้อมูล การประมวลผล และผลลัพธ์
            <br />
            แผนภาพคลาส, ลำดับ, กรณีการใช้งาน, กิจกรรม
            <br />
            แผนภาพลำดับงานและการวิเคราะห์งานแบบชั้น
          </div>
          <div className="mt-6">
            <img src={BannerPic5} width="500" height="600" alt="Banner 1" className="mb-4" />
            <img src={BannerPic6} width="500" height="600" alt="Banner 2" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Uxui;
