import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Test from '../components/test';

class Myartwork extends Component {


  render() {
    return (
      <>
        <Header />
        <Test />
        <div>Myartwork</div>
       
        <p className="gradient-text text-4xl font-medium text-transparent animate-gradient">
            Supercharged by
          </p>
          
        <Footer />
      </>
    );
  }
}

export default Myartwork;
