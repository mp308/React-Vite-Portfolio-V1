import React from 'react';

function FooterBanner() {
  return (
    <div className="py-24 sm:py-32 font-title">
      <h1 className="font-bold text-white text-4xl sm:text-6xl text-center pb-14">ระดับการศึกษา</h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-8 text-center">
          <div className="flex flex-col gap-y-4 items-center">
            <dt className="text-base leading-7 text-white">BANGKOK CHRISTIAN COLLEGE</dt>
            <dd className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              มัธยม
            </dd>
            <gp>
              gpax =2.98
            </gp>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <dt className="text-base leading-7 text-white">FACULTY OF LIBERAL ARTS & SCIENCE KASETSART UNIVERSITY</dt>
            <dd className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              ปริญญาตรี
            </dd>
            <gp>
              gpax =3.57
            </gp>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default FooterBanner;
