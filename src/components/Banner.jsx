import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

//picture
import BannerPic1 from '../assets/images/content1.jpg';
import BannerPic2 from '../assets/images/content2.jpg';
import BannerPic3 from '../assets/images/content3.jpg';
import BannerPic4 from '../assets/images/content4.jpg';
import BannerPic5 from '../assets/images/content5.jpg';



let bannerData = {
    title: "Welcome To Sanpitch Website",
    desc: "อย่าให้ความชั่วชนะเราได้ แต่จงชนะความชั่วด้วยความดี"
}


function Banner() {

    const slides = [
        {
            url: BannerPic1,
        },
        {
            url: BannerPic2,
        },
        {
            url: BannerPic3,
        },
        {
            url: BannerPic4,
        },
        {
            url: BannerPic5,
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            {/* <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${BannerPic1})` }}>
                <div className="max-w-[960px] mx-auto h-full flex items-center justify-center ">
                    <div className="flex items-center justify-center h-[500px]">
                        <div className="text-center text-white ">
                            <h1 className="text-3xl md:text-5xl font-embed" style={{ textShadow: "4px 4px orange, 8px 8px red" }}>{bannerData.title}</h1>
                            <p className="mt-4 text-lg md:text-xl px-4 md:px-0">{bannerData.desc}</p>
                            <a href="#" className="inline-block mt-4 bg-white text-black py-2 px-4 rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white uppercase">
                                Learn
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className=' h-[500px] sm:h-[500px] md:h-[700px] lg:h-[800px] w-full m-auto py-16 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-tr-4xl rounded-bl-4xl bg-center bg-cover duration-500'
                > <h1 className='font-bebas text-outline text-8xl p-5 absolute text-transparent'>Recommend</h1>
                <h1 className='font-bebas text-8xl p-5 animate-movement-text' style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>Recommend</h1> </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Banner;
