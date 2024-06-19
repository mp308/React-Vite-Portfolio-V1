import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

const HERO_CONTENT = "Some introductory content here."; // Define your HERO_CONTENT here

export class Classlevel extends Component {
  render() {
    return (
      <>
        <div className='border-b border-neutral-900 p-8 lg:md-35 text-white'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-6xl font-bebas tracking-tight lg:mt-16'>
                  Class Level
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Classlevel;
