import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import BannerPic1 from '../assets/images/content1.jpg';
import BannerPic2 from '../assets/images/content2.jpg';
import BannerPic3 from '../assets/images/content3.jpg';
import BannerPic4 from '../assets/images/content4.jpg';
import BannerPic5 from '../assets/images/content5.jpg';
import BannerPic6 from '../assets/images/l1.jpg';
import BannerPic7 from '../assets/images/l2.jpg';
import BannerPic8 from '../assets/images/l3.jpg';
import BannerPic9 from '../assets/images/l4.jpg';
import BannerPic10 from '../assets/images/l5.jpg';

let bannerData = {
    title: "Welcome To Sanpitch Website",
    desc: "อย่าให้ความชั่วชนะเราได้ แต่จงชนะความชั่วด้วยความดี"
};

function Banner() {
    const slides = [
        { url: BannerPic1 },
        { url: BannerPic2 },
        { url: BannerPic3 },
        { url: BannerPic4 },
        { url: BannerPic5 },
        { url: BannerPic6 },
        { url: BannerPic7 },
        { url: BannerPic8 },
        { url: BannerPic9 },
        { url: BannerPic10 },
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
            <div className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full m-auto py-16 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                >
                    <h1 className='font-bebas text-outline text-4xl sm:text-5xl md:text-6xl lg:text-8xl p-5 absolute text-transparent'>Recommend</h1>
                    <h1 className='font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-8xl p-5 animate-movement-text' style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)' }}>Recommend</h1>
                </div>
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
