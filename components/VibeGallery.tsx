
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const VibeGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage !== null) {
        setSelectedImage((selectedImage + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = () => {
      if (selectedImage !== null) {
          setSelectedImage((selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      }
  };

  return (
    <div className="py-24 sm:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
            className="font-heading text-6xl md:text-7xl text-brand-light tracking-wider"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          The <span className="text-brand-green">Vibe</span> is Real
        </motion.h2>
        <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-brand-light/80"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          Good food, good friends, good times.
        </motion.p>
        <div className="mt-16 columns-2 md:columns-3 lg:columns-4 gap-4">
            {GALLERY_IMAGES.map((imageDesc, index) => (
                <GalleryImage
                    key={index}
                    imageDesc={imageDesc}
                    onClick={() => setSelectedImage(index)}
                />
            ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage !== null && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    className="relative w-11/12 h-5/6 md:w-3/4 md:h-3/4 lg:w-2/3 lg:h-5/6 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                    <div className="w-full h-full bg-cover bg-center flex items-center justify-center">
                        <p className="text-white/50 text-center">{GALLERY_IMAGES[selectedImage]}</p>
                    </div>
                </motion.div>
                <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-3xl hover:text-brand-red transition"><FaTimes /></button>
                <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-brand-yellow transition"><FaArrowLeft /></button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-brand-yellow transition"><FaArrowRight /></button>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryImage: React.FC<{imageDesc: string, onClick: () => void}> = ({ imageDesc, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg mb-4 break-inside-avoid cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="absolute inset-0">
                <AnimatePresence>
                    {isHovered && (
                        <>
                            <motion.div style={{ background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="absolute inset-0" />
                            <motion.div style={{ background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)' }} initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }} animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }} exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="absolute inset-0" />
                        </>
                    )}
                </AnimatePresence>
                <div className="absolute inset-[2px] bg-brand-dark rounded-md"></div>
            </div>
            <div className="relative h-full w-full bg-gray-700 min-h-[150px] flex items-center justify-center p-2">
                 <p className="text-white/30 text-xs text-center">{imageDesc}</p>
            </div>
        </motion.div>
    );
};

export default VibeGallery;
