import React from "react";
import BannerPic from '../assets/images/content.jpg'; // Correct the import path as per your project structure

let bannerData = {
    title: "Welcome To Sanpitch Website",
    desc: "อย่าให้ความชั่วชนะเราได้ แต่จงชนะความชั่วด้วยความดี"
}

function Banner() {
    return (
        <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${BannerPic})` }}>
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
        </div>
    );
}

export default Banner;
