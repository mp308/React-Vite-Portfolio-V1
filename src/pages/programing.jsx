import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EV_GIT from '../components/EV_GIT'

export class Programing extends Component {
  render() {
    return (
        <>
        <Header/>
      <div className='bg-[#1a1a1a]'>
      <EV_GIT/>
      </div>
      <Footer/>
      </>
    )
  }
}

export default Programing