
import React, { useState, useRef } from 'react';
import { motion, Variants, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsImageHovered(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariantsLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const itemVariantsRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  return (
    <div className="py-24 sm:py-32 bg-brand-dark" style={{ perspective: '1000px' }}>
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div 
          ref={imageRef}
          variants={itemVariantsLeft} 
          className="relative w-full h-80 md:h-[500px] rounded-lg shadow-2xl overflow-hidden perspective-1000"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onHoverStart={() => setIsImageHovered(true)}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(254, 209, 0, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Glow effect background */}
            <div className="absolute inset-0 opacity-70">
                <AnimatePresence>
                    {isImageHovered && (
                        <>
                            {/* Green glow from top-center traveling left */}
                            <motion.div 
                                className="absolute inset-0"
                                style={{ 
                                    background: 'linear-gradient(225deg, rgba(0, 155, 119, 0.8) 0%, rgba(0, 155, 119, 0.4) 25%, transparent 50%)',
                                    filter: 'blur(8px)'
                                }}
                                initial={{ 
                                    clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)'
                                }}
                                animate={{ 
                                    clipPath: 'polygon(50% 0%, 0% 50%, 0% 100%, 50% 100%)'
                                }}
                                exit={{ 
                                    clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)'
                                }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                            {/* Yellow glow from top-center traveling right */}
                            <motion.div 
                                className="absolute inset-0"
                                style={{ 
                                    background: 'linear-gradient(315deg, rgba(254, 209, 0, 0.8) 0%, rgba(254, 209, 0, 0.4) 25%, transparent 50%)',
                                    filter: 'blur(8px)'
                                }}
                                initial={{ 
                                    clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)'
                                }}
                                animate={{ 
                                    clipPath: 'polygon(50% 0%, 100% 50%, 100% 100%, 50% 100%)'
                                }}
                                exit={{ 
                                    clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)'
                                }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                            />
                            {/* Central meeting glow at bottom */}
                            <motion.div 
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16"
                                style={{ 
                                    background: 'radial-gradient(ellipse, rgba(255, 215, 0, 0.6) 0%, rgba(0, 155, 119, 0.4) 40%, transparent 70%)',
                                    filter: 'blur(12px)'
                                }}
                                initial={{ 
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{ 
                                    scale: 1.5,
                                    opacity: 1
                                }}
                                exit={{ 
                                    scale: 0,
                                    opacity: 0
                                }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>
            {/* Image border */}
            <div className="absolute inset-[2px] bg-brand-dark rounded-lg"></div>
            <div 
                className="relative z-10 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://res.cloudinary.com/dkpp29hrv/image/upload/v1752979853/cld-sample-4.jpg)'
                }}
            ></div>
        </motion.div>
        <motion.div variants={itemVariantsRight}>
        <h2 className="font-heading text-5xl md:text-6xl text-brand-yellow tracking-wide">
            Where Flavour Finds You
        </h2>
        <p className="mt-6 text-lg text-brand-light/90 leading-relaxed">
          Flavours was created to bring the bold, vibrant taste of Jamaica to the heart of Toronto. Every dish is crafted with love, rooted in tradition, and full of soul.
        </p>
        <p className="mt-4 text-lg text-brand-light/90 leading-relaxed">
          More than just a place to eat, we’re a gathering spot. A place where the game is always on, milestones are celebrated, and everyone is welcomed with island hospitality. One love, always.
        </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
