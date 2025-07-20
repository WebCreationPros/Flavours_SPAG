
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800/50 text-left"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Left & Bottom Glow */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)',
                }}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              {/* Right & Top Glow */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)',
                }}
                initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }}
                animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }}
                exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </>
          )}
        </AnimatePresence>
        <div className="absolute inset-[2px] bg-gray-900 rounded-lg"></div>
      </div>
      
      <div className="relative z-10">
        <div className="h-56 w-full bg-gray-700">
            {/* Placeholder: High-quality image of the dish */}
            <div className="w-full h-full bg-cover bg-center flex items-center justify-center">
                <p className="text-white/30 text-xs text-center p-4">{item.image}</p>
            </div>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-2xl text-brand-light">{item.name}</h3>
          <p className="mt-2 text-brand-light/70 font-light">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
