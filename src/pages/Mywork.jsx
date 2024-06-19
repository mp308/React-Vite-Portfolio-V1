import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Classlevel from '../components/Classlevel';
import Content from '../components/Myworkcontent';
import Contact from '../components/Contact';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

class Mywork extends Component {
  componentDidMount() {
    // Adding hover effect to the specific h3 element
    document.querySelector(".hover-effect").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className='bg-[#1a1a1a]'>
         
          <h3 className='font-bebas text-4xl text-white hover-effect' data-value='testhackerfont'>testhackerfont</h3>
          <div>Mywork</div>
          <Content />
          <Classlevel />
        </div>
        <Footer />
      </>
    );
  }
}

export default Mywork;
