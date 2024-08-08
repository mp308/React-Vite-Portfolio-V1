import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyPic from '../assets/images/fifa.png';
import MyPic2 from '../assets/images/Dicut_MyPic.png';
import MyPic3 from '../assets/images/talay.jpg';

const people = [
  {
    name: 'Sanpitch Phuvapaisankit',
    role: 'Co-Founder / CEO',
    imageUrl: MyPic,
  },
  {
    name: 'Sanpitch Phuvapaisankit',
    role: 'DEV',
    imageUrl: MyPic2,
  },
  {
    name: 'Sanpitch Phuvapaisankit',
    role: 'Ux/Ui',
    imageUrl: MyPic3,
  },
  {
    name: 'Sanpitch Phuvapaisankit',
    role: 'Graphic Designer',
    imageUrl: MyPic,
  },
];

export class Teampage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-[#1a1a1a] py-24 sm:py-32 min-h-screen flex flex-col">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex-1">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet Our Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Meet our talented team members who drive our success.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
              {people.map((person) => (
                <div key={person.name} className="flex flex-col items-center max-w-xs">
                  <img className="h-32 w-32 rounded-full border-2 border-gray-700 mb-4" src={person.imageUrl} alt={person.name} />
                  <div className="text-center">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-300">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Teampage;
