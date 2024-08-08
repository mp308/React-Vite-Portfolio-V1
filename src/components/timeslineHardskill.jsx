import React from 'react';
import { useNavigate } from 'react-router-dom';

const TimeslineHardskill = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
    return (
        <>
        <div className='pt-8'>
          <ul className="list-none border-r-2 border-[#6b7c85] p-6 font-title">
            <li className="relative p-5 cursor-pointer transition duration-500 hover:bg-[#071f2a] rounded-2xl group"
                onClick={() => handleClick('/Uxui')}>
              <span className="inline-block bg-[#555d61] rounded-full px-2 py-1 text-sm text-center">UX/UI Skills</span>
              <div className="content mt-2">
                <h3 className="text-[#34ace0] text-lg">ผลงานการส้ราง Ux/Ui</h3>
                <p className="text-sm mt-2">
                  เป็นการออกแบบหน้าตา UX/UI ของระบบต่างๆ บน Figma
                </p>
              </div>
              <span className="absolute right-[-30px] top-[28px] w-2.5 h-2.5 bg-[#34ace0] rounded-full transition duration-500 group-hover:bg-green-500 group-hover:shadow-[0_0_10px_2px_#0F0]"></span>
            </li>

            <li className="relative p-5 cursor-pointer transition duration-500 hover:bg-[#071f2a] rounded-2xl group"
            onClick={() => handleClick('/Editor')}>
              <span className="inline-block bg-[#1685b8] rounded-full px-2 py-1 text-sm text-center">Editor skill</span>
              <div className="content mt-2">
                <h3 className="text-[#34ace0] text-lg">ผลงานการตัดต่อภาพและสื่อสิ่งพิมพ์</h3>
                <p className="text-sm mt-2">
                ผลงานการตัดต่อภาพและสื่อสิ่งพิมพ์ผ่านโปรแกรมต่างๆอาทิเช่น Adobe Photoshop Adobe Illustrator 
                </p>
              </div>
              <span className="absolute right-[-30px] top-[28px] w-2.5 h-2.5 bg-[#34ace0] rounded-full transition duration-500 group-hover:bg-green-500 group-hover:shadow-[0_0_10px_2px_#0F0]"></span>
            </li>

            <li className="relative p-5 cursor-pointer transition duration-500 hover:bg-[#071f2a] rounded-2xl group"
            onClick={() => handleClick('/Programing')}>
              <span className="inline-block bg-[#1685b8] rounded-full px-2 py-1 text-sm text-center">Programing skill</span>
              <div className="content mt-2">
                <h3 className="text-[#34ace0] text-lg">ผลงานการโค้ตดิ้ง</h3>
                <p className="text-sm mt-2">
                Repositories โปรเจคต่างๆที่ผมได้เคยทำมา มีมากมายหลายภาษา
                </p>
              </div>
              <span className="absolute right-[-30px] top-[28px] w-2.5 h-2.5 bg-[#34ace0] rounded-full transition duration-500 group-hover:bg-green-500 group-hover:shadow-[0_0_10px_2px_#0F0]"></span>
            </li>

            
            
          </ul>
        </div>
      </>
    )
  }


export default TimeslineHardskill