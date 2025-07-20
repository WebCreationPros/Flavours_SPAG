
import React from 'react';
import { motion } from 'framer-motion';
import { MENU_HIGHLIGHTS } from '../constants';
import MenuCard from './MenuCard';

const MenuHighlights: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="py-24 sm:py-32 bg-brand-dark/95" style={{backgroundImage: 'radial-gradient(circle at top right, rgba(0, 155, 119, 0.1), transparent 40%)'}}>
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    className="font-heading text-6xl md:text-7xl text-brand-light tracking-wider"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-brand-yellow">Taste</span> The Vibe
                </motion.h2>
                <motion.p 
                    className="mt-4 max-w-2xl mx-auto text-lg text-brand-light/80"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Our most-loved dishes, crafted with authentic spices and a whole lot of love.
                </motion.p>
                <motion.div 
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {MENU_HIGHLIGHTS.map((item, index) => (
                        <MenuCard key={index} item={item} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MenuHighlights;
