import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoHomeFill } from "react-icons/go";

class Mywork extends Component {


  render() {
    return (
      <>
        <Header />
        <div>Mywork</div>
        
        <div className="flex justify-center items-center h-screen">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '1s' }}>
          <GoHomeFill className="text-4xl text-blue-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '2s' }}>
          <GoHomeFill className="text-4xl text-green-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '3s' }}>
          <GoHomeFill className="text-4xl text-red-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '4s' }}>
          <GoHomeFill className="text-4xl text-yellow-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '5s' }}>
          <GoHomeFill className="text-4xl text-blue-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '6s' }}>
          <GoHomeFill className="text-4xl text-green-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '7s' }}>
          <GoHomeFill className="text-4xl text-red-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-rotate-circle" style={{ animationDelay: '8s' }}>
          <GoHomeFill className="text-4xl text-yellow-500" />
        </div>


      </div>
    </div>

        <Footer />
      </>
    );
  }
}

export default Mywork;