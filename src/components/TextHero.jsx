import React from 'react';
import { motion } from 'framer-motion';

function TextHero() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <motion.div
        className='text-9xl text-center font-bebas'
        animate={{
          x: 40,
          y: 30,
          scale: 2,
          rotate: 360,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        Sanpitch
      </motion.div>
    </div>
  );
}

export default TextHero;
