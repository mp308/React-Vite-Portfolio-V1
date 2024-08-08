import React, { Component } from 'react'
import F_pic1 from "../assets/images/softskills/Editor/Anniversary/6.jpg"
import F_pic2 from "../assets/images/softskills/Editor/Anniversary/bingo.jpg"
import F_pic3 from "../assets/images/softskills/Editor/Anniversary/l.jpg"
import F_pic4 from "../assets/images/softskills/Editor/Anniversary/law.jpg"
import F_pic5 from "../assets/images/softskills/Editor/Anniversary/r.jpg"
import F_pic6 from "../assets/images/softskills/Editor/Anniversary/r3.jpg"
import F_pic7 from "../assets/images/softskills/Editor/Anniversary/r5.jpg"
import F_pic8 from "../assets/images/softskills/Editor/Anniversary/ru.jpg"
import F_pic9 from "../assets/images/softskills/Editor/Anniversary/siri2.jpg"
import F_pic10 from "../assets/images/softskills/Editor/Anniversary/Untitled-4.jpg"
import F_pic11 from "../assets/images/softskills/Editor/Anniversary/เมียten new.jpg"
import F_pic12 from "../assets/images/softskills/Editor/Anniversary/บัตรที่จองไว้.jpg"
import F_pic13 from "../assets/images/softskills/Editor/Anniversary/พระเทพ.jpg"
import F_picBanner1 from "../assets/images/softskills/Editor/Anniversary/168.jpg"
import F_picBanner2 from "../assets/images/softskills/Editor/Anniversary/999.jpg"
import F_picBanner3 from "../assets/images/softskills/Editor/Anniversary/laknakrubbisudming.jpg"
import F_picBanner4 from "../assets/images/softskills/Editor/Anniversary/repost ig.jpg"
import F_picBanner5 from "../assets/images/softskills/Editor/Anniversary/SPON.jpg"
import F_picBanner6 from "../assets/images/softskills/Editor/Anniversary/time table.jpg"
import F_picBanner7 from "../assets/images/softskills/Editor/Anniversary/Untitled-1.jpg"

export class EV_anniversary extends Component {
  render() {
    return (
      <>
        <div className="p-5 text-center">
          <h1 className="text-3xl  mb-5 text-white font-mitr">ภาพโปรโมทสื่อสิ่งพิมพ์งาน BCC168Anniversary</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img src={F_pic1} alt="Anniversary 1" className="rounded-lg shadow-md" />
            <img src={F_pic2} alt="Anniversary 2" className="rounded-lg shadow-md" />
            <img src={F_pic3} alt="Anniversary 3" className="rounded-lg shadow-md" />
            <img src={F_pic4} alt="Anniversary 4" className="rounded-lg shadow-md" />
            <img src={F_pic5} alt="Anniversary 5" className="rounded-lg shadow-md" />
            <img src={F_pic6} alt="Anniversary 6" className="rounded-lg shadow-md" />
            <img src={F_pic7} alt="Anniversary 7" className="rounded-lg shadow-md" />
            <img src={F_pic8} alt="Anniversary 8" className="rounded-lg shadow-md" />
            <img src={F_pic9} alt="Anniversary 9" className="rounded-lg shadow-md" />
            <img src={F_pic10} alt="Anniversary 10" className="rounded-lg shadow-md" />
            <img src={F_pic11} alt="Anniversary 11" className="rounded-lg shadow-md" />
            <img src={F_pic12} alt="Anniversary 12" className="rounded-lg shadow-md" />
            <img src={F_pic13} alt="Anniversary 13" className="rounded-lg shadow-md" />
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src={F_picBanner1} alt="Banner 1" className="rounded-lg shadow-md" />
            <img src={F_picBanner2} alt="Banner 2" className="rounded-lg shadow-md" />
            <img src={F_picBanner3} alt="Banner 3" className="rounded-lg shadow-md" />
            <img src={F_picBanner4} alt="Banner 4" className="rounded-lg shadow-md" />
            <img src={F_picBanner5} alt="Banner 5" className="rounded-lg shadow-md" />
            <img src={F_picBanner6} alt="Banner 6" className="rounded-lg shadow-md" />
            <img src={F_picBanner7} alt="Banner 7" className="rounded-lg shadow-md" />
          </div>
        </div>
      </>
    )
  }
}

export default EV_anniversary
