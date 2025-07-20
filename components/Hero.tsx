
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const Hero: React.FC = () => {
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isOrderHovered, setIsOrderHovered] = useState(false);
  const [isFood1Hovered, setIsFood1Hovered] = useState(false);
  const [isFood2Hovered, setIsFood2Hovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const foodX1 = useTransform(x, [0, window.innerWidth], ['-20px', '20px']);
  const foodY1 = useTransform(y, [0, window.innerHeight], ['-20px', '20px']);
  const foodX2 = useTransform(x, [0, window.innerWidth], ['25px', '-25px']);
  const foodY2 = useTransform(y, [0, window.innerHeight], ['15px', '-15px']);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const headlineText = "TASTE THE ISLAND. FEEL THE FIRE.";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04,
      },
    },
  };
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const scrollToMenu = () => {
     document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-brand-dark">
      {/* Background Video Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video 
            ref={videoRef}
            src="/assets/videos/Hero_bg.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Mid Layer - Animated Shapes */}
      <motion.div className="absolute inset-0 z-10" style={{ y: y2 }}>
         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
         <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-yellow/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </motion.div>

      

      {/* Content Layer */}
      <div className="relative z-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-brand-yellow uppercase tracking-wider [text-shadow:_4px_4px_0_rgb(0_155_119_/_80%)]"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {headlineText.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-2xl text-brand-light/90 font-light tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Good Times. Great Food. One Love.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <motion.div
            className="relative"
            onHoverStart={() => setIsExploreHovered(true)}
            onHoverEnd={() => setIsExploreHovered(false)}
          >
            <motion.button 
              onClick={scrollToMenu}
              className="relative z-10 font-bold py-3 px-8 rounded-full border-2 border-transparent text-brand-yellow"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(254, 209, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Explore Menu
            </motion.button>
            <div className="absolute inset-[-3px] rounded-full overflow-hidden -z-10">
               <AnimatePresence>{isExploreHovered && <>
                <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} transition={{ duration: 0.5, ease: 'easeInOut' }}/>
                <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }} exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }} transition={{ duration: 0.5, ease: 'easeInOut' }}/>
               </>}</AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            onHoverStart={() => setIsOrderHovered(true)}
            onHoverEnd={() => setIsOrderHovered(false)}
          >
            <motion.a
              href="https://www.doordash.com/en/store/flavours-sports-bar-and-grill-toronto-27776730/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block font-bold py-3 px-8 rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Order Now
            </motion.a>
            <div className="absolute inset-[-3px] rounded-full overflow-hidden -z-10">
               <AnimatePresence>{isOrderHovered && <>
                <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} transition={{ duration: 0.5, ease: 'easeInOut' }}/>
                <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }} exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }} transition={{ duration: 0.5, ease: 'easeInOut' }}/>
               </>}</AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
