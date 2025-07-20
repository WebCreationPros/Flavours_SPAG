
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';

const Catering: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-24 sm:py-32 bg-brand-dark" style={{backgroundImage: 'radial-gradient(circle at bottom left, rgba(239, 68, 68, 0.1), transparent 40%)'}}>
      <motion.div
        className="container mx-auto px-6 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <FaUtensils className="text-5xl text-brand-yellow mb-6" />
        <h2 className="font-heading text-5xl md:text-6xl text-brand-light tracking-wider">
          Bring The Flavour To You
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-light/80">
          Our catering services bring the authentic taste of Jamaica to your special events, parties, and corporate functions. Contact us to build your perfect menu.
        </p>
        <motion.div
            className="relative mt-8"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
          <motion.a
            href="mailto:catering@flavours.example.com"
            className="relative z-10 block font-bold py-3 px-8 rounded-full border-2 border-transparent text-brand-yellow"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(254, 209, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Inquire About Catering
          </motion.a>
          <div className="absolute inset-[-3px] rounded-full overflow-hidden -z-10">
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} transition={{ duration: 0.5, ease: 'easeInOut' }}/>
                    <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }} exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }} transition={{ duration: 0.5, ease: 'easeInOut' }}/>
                  </>
                )}
              </AnimatePresence>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Catering;
