
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

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
    <div className="py-24 sm:py-32 bg-brand-dark">
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div 
          variants={itemVariantsLeft} 
          className="relative w-full h-80 md:h-[500px] rounded-lg shadow-2xl overflow-hidden"
          onHoverStart={() => setIsImageHovered(true)}
          onHoverEnd={() => setIsImageHovered(false)}
        >
            <div className="absolute inset-0">
                <AnimatePresence>
                    {isImageHovered && (
                        <>
                            <motion.div style={{ background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="absolute inset-0" />
                            <motion.div style={{ background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }} exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="absolute inset-0" />
                        </>
                    )}
                </AnimatePresence>
                <div className="absolute inset-[2px] bg-brand-dark rounded-lg"></div>
            </div>
            <div className="relative z-10 w-full h-full bg-cover bg-center bg-gray-600 flex items-center justify-center">
                <p className="text-white/50 text-center">Placeholder:<br/>Welcoming staff photo</p>
            </div>
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
