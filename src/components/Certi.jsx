import React, { Component } from 'react';
import KU_CER from '../assets/images/HardSkills/certificate/cer_page-0001.jpg';
import KU_CER65 from '../assets/images/HardSkills/certificate/65.jpg';
import KU_CER66 from '../assets/images/HardSkills/certificate/66.jpg';
import KU_CER67 from '../assets/images/HardSkills/certificate/67.jpg';

import HackerRank_CER_sql_ba from '../assets/images/HardSkills/certificate/sql_basic certificate_page-0001.jpg';
import HackerRank_CER_sql_in from '../assets/images/HardSkills/certificate/sql_intermediate certificate_page-0001.jpg';
import HackerRank_CER_css from '../assets/images/HardSkills/certificate/css certificate_page-0001.jpg';
import HackerRank_CER_java from '../assets/images/HardSkills/certificate/java_basic certificate_page-0001.jpg';
import HackerRank_CER_react from '../assets/images/HardSkills/certificate/react_basic certificate_page-0001.jpg';

export class Certi extends Component {
  render() {
    const certificates = [
      {
        imgSrc: KU_CER,
        description: "KU Certificate - เกียรติบัตรผลการเรียนดีเป็นอันดับที่สองของ สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ",
      },
      {
        imgSrc: KU_CER65,
        description: "KU Certificate - Example description for certificate 65",
      },
      {
        imgSrc: KU_CER66,
        description: "KU Certificate - Example description for certificate 66",
      },
      {
        imgSrc: KU_CER67,
        description: "KU Certificate - Example description for certificate 67",
      },
      {
        imgSrc: HackerRank_CER_sql_ba,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Basic",
      },
      {
        imgSrc: HackerRank_CER_sql_in,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Intermediate",
      },
      {
        imgSrc: HackerRank_CER_css,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ CSS",
      },
      {
        imgSrc: HackerRank_CER_java,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ Java Basic",
      },
      {
        imgSrc: HackerRank_CER_react,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ React Basic",
      }
    ];

    return (
      <>
        <div className='font-bold text-white text-4xl sm:text-6xl text-center pb-14'>
          Certificate
        </div>
        <div className="flex flex-col items-center gap-12 pb-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="max-w-lg">
              <img 
                src={certificate.imgSrc} 
                alt={`Certificate ${index + 1}`} 
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-center text-white mt-4 font-mitr">
                {certificate.description}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Certi;
