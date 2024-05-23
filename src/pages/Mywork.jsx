import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoHomeFill } from "react-icons/go";
import Content from '../components/Myworkcontent';

class Mywork extends Component {


  render() {
    return (
      <>
        <Header />
        <body className='bg-[#1a1a1a]'>
          
        
        <div>Mywork</div>
        <Content />
        </body>
        <Footer />
      </>
    );
  }
}

export default Mywork;