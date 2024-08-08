import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class SoftSkill extends Component {
  render() {
    return (
      <>
        <div className="relative max-w-5xl mx-auto text-black pt-10">
          <div className="relative flex flex-col items-center">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 bg-[#FF9F55] w-1.5"></div>
            <div className="relative w-full">
              {/* Timeline Item */}
              <div className="flex items-center justify-start mb-8">
                
                <div className="bg-white p-6 rounded-lg border border-[#35c40a] shadow-lg w-1/2 ml-10">
                  <Link to="/Uxui" className=" font-bebas text-xl hover:text-yellow-500 transition  duration-300 ease-in-out " >UX/UI Skills</Link>
                  
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="absolute -left-2 bg-[#32f051] w-4 h-4 rounded-full border border-white"></div>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex items-center justify-end mb-8">
                <div className="flex-shrink-0 relative">
                  <div className="absolute -right-2 bg-[#FF9F55] w-4 h-4 rounded-full border border-white"></div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#FF9F55] shadow-lg w-1/2 mr-10">
                  <h2 className="text-xl font-thin font-bebas">Editor skill</h2>
                 
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex items-center justify-start mb-8">
                <div className="bg-white p-6 rounded-lg border border-[#FF9F55] shadow-lg md:w-1/2 ml-10">
                  <h2 className="text-xl font-thin font-bebas">LeaderShip skill</h2>
                  
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="absolute -left-2 bg-[#55f4ff] w-4 h-4 rounded-full border border-white"></div>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex items-center justify-end mb-8">
                <div className="flex-shrink-0 relative">
                  <div className="absolute -right-2 bg-[#ff55f6] w-4 h-4 rounded-full border border-white"></div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#FF9F55] shadow-lg w-1/2 mr-10">
                  <h2 className="text-xl font-thin font-bebas">Comunication skill</h2>
                  
                </div>
              </div>

              
              {/* Timeline Item */}
              <div className="flex items-center justify-start mb-8">
                <div className="bg-white p-6 rounded-lg border border-[#ccff55] shadow-lg md:w-1/2 ml-10">
                  <h2 className="text-xl font-thin font-bebas">Coolaboration skill</h2>
                  
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="absolute -left-2 bg-[#d2ff55] w-4 h-4 rounded-full border border-white"></div>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex items-center justify-end mb-8">
                <div className="flex-shrink-0 relative">
                  <div className="absolute -right-2 bg-[#5582ff] w-4 h-4 rounded-full border border-white"></div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#FF9F55] shadow-lg w-1/2 mr-10">
                  <h2 className="text-xl font-thin font-bebas">Positive Attitude skill</h2>
                  
                </div>
              </div>

               {/* Timeline Item */}
               <div className="flex items-center justify-start mb-8">
                <div className="bg-white p-6 rounded-lg border border-[#FF9F55] shadow-lg md:w-1/2 ml-10">
                  <h2 className="text-xl font-thin font-bebas">Decision Making skill</h2>
                  
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="absolute -left-2 bg-[#eb497f] w-4 h-4 rounded-full border border-white"></div>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex items-center justify-end mb-8">
                <div className="flex-shrink-0 relative">
                  <div className="absolute -right-2 bg-[#5f4a99] w-4 h-4 rounded-full border border-white"></div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#FF9F55] shadow-lg w-1/2 mr-10">
                  <h2 className="text-xl font-thin font-bebas">Photography Attitude skill</h2>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SoftSkill;
