import React, { Component } from 'react';
import KU_CER from '../assets/images/HardSkills/cer_page-0001.jpg';
import HackerRank_CER from '../assets/images/HardSkills/sql_basic certificate_page-0001.jpg';

export class Certi extends Component {
  render() {
    return (
      <>
        <div className='font-bold text-white text-4xl sm:text-6xl text-center pb-14'>
          Certificate
        </div>
        <div className="flex flex-col items-center gap-12 pb-8">
          <div className="max-w-lg">
            <img 
              src={KU_CER} 
              alt="KU Certificate" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-white mt-4">KU Certificate - เกียรติบัตรผลการเรียนดีเป็นอันดับที่สองของ สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ</p>
          </div>
          <div className="max-w-lg">
            <img 
              src={HackerRank_CER} 
              alt="HackerRank Certificate" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-white mt-4">HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Basic</p>
          </div>
        </div>
      </>
    );
  }
}

export default Certi;
