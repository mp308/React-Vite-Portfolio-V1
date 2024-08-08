import React, { Component } from 'react'
import F_pic1 from "../assets/images/softskills/Editor/YearBook/คอน.jpg"
import F_pic2 from "../assets/images/softskills/Editor/YearBook/รวม1.jpg"
import F_pic3 from "../assets/images/softskills/Editor/YearBook/รวม2.jpg"
import F_pic4 from "../assets/images/softskills/Editor/YearBook/ร้านค้า.jpg"
import F_pic5 from "../assets/images/softskills/Editor/YearBook/ลานสัน.jpg"
import F_pic6 from "../assets/images/softskills/Editor/YearBook/หอธรรม.jpg"
import F_picBanner1 from "../assets/images/softskills/Editor/YearBook/jatu2.jpg"

export class EV_YearBook extends Component {
  render() {
    return (
      <>
        <div className="p-5 text-center">
          <h1 className="text-3xl  mb-5 text-white font-mitr">ภาพโปรโมทสื่อสิ่งพิมพ์งาน หนังสื่อรุ่น</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img src={F_pic1} alt="YearBook 1" className="rounded-lg shadow-md" />
            <img src={F_pic2} alt="YearBook 2" className="rounded-lg shadow-md" />
            <img src={F_pic3} alt="YearBook 3" className="rounded-lg shadow-md" />
            <img src={F_pic4} alt="YearBook 4" className="rounded-lg shadow-md" />
            <img src={F_pic5} alt="YearBook 5" className="rounded-lg shadow-md" />
            <img src={F_pic6} alt="YearBook 6" className="rounded-lg shadow-md" />
          </div>
          <div className="mt-5">
            <img src={F_picBanner1} alt="Banner" className="rounded-lg shadow-md" />
          </div>
        </div>
      </>
    )
  }
}

export default EV_YearBook
