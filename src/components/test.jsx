import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1
    }
  }
};

export default function Test() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start("hidden");
      sequence();
    };

    sequence();

    // Cleanup function to stop animation loop when component unmounts
    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate={controls}
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          variants={draw}
          custom={1}
        />
        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#00cc88"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#00cc88"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          variants={draw}
          custom={2.5}
        />
        <motion.rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          stroke="#0099ff"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          variants={draw}
          custom={3}
        />
      </motion.svg>

      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate={controls}
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          variants={draw}
          custom={1}
        />
        <motion.text
          x="100"
          y="100"
          textAnchor="middle"
          stroke="#ffffff"
          fill="transparent"
          strokeWidth="1"
          strokeLinecap="round"
          fontSize="24"
          variants={textAnimation}
          custom={3}
          className="text-bebas text-9xl"
        >
          Hello SVG
        </motion.text>

        
       
        
      </motion.svg>
      
    </div>
  );
}
