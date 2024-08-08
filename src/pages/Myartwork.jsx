import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SoftSkill from '../components/SoftSkill'
import WelcomBanner from '../components/WelcomBanner';
import Test from '../components/test';
import EV_Football from '../components/EV_Football';
import EV_YearBook from '../components/EV_YearBook';
import EV_anniversary from '../components/EV_anniversary';

class Myartwork extends Component {


  render() {
    return (
      <>
        <Header />
        <div className='bg-[#1a1a1a]'>
          <WelcomBanner/>
          <SoftSkill/>
        <EV_Football/>
        <EV_YearBook/>
        <EV_anniversary/>
          </div>
        <Footer />
      </>
    );
  }
}

export default Myartwork;
