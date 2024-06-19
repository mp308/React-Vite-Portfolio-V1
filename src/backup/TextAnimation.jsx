import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const chars = textElement.textContent.split('');
    textElement.innerHTML = chars.map(char => `<span class="char">${char}</span>`).join('');

    const charElements = textElement.querySelectorAll('.char');

    gsap.fromTo(charElements, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: 'power3.out',
      duration: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, []);

  return (
    
      <div className="text-4xl font-bold text-gray-800" ref={textRef}>
        Hello, GSAP! 
    </div>
  );
};

export default TextAnimation;
