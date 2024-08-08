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
        <div className="bg-[#1a1a1a] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet Our Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Meet our talented team members who drive our success.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full border-2 border-gray-700" src={person.imageUrl} alt={person.name} />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-300">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Teampage;
