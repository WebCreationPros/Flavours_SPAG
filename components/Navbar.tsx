
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isOrderHovered, setIsOrderHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '#home';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setActiveLink(href);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.9)' : 'rgba(26, 26, 26, 0)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Logo className="h-12 w-auto" />
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-brand-light font-semibold tracking-wider hover:text-brand-yellow transition-colors duration-300"
            >
              {link.name}
              <AnimatePresence>
              {activeLink === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-brand-yellow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              </AnimatePresence>
            </a>
          ))}
        </div>
        <motion.div
          className="relative"
          onHoverStart={() => setIsOrderHovered(true)}
          onHoverEnd={() => setIsOrderHovered(false)}
        >
          <motion.a
            href="https://www.doordash.com/en/store/flavours-sports-bar-and-grill-toronto-27776730/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block bg-brand-red text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-brand-red/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Order Online
          </motion.a>
           <div className="absolute inset-[-3px] rounded-full overflow-hidden -z-10">
              <AnimatePresence>
                {isOrderHovered && (
                  <>
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, var(--tw-color-brand-green) 0%, transparent 50%)' }}
                      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                      exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(315deg, var(--tw-color-brand-yellow) 0%, transparent 50%)' }}
                      initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0 100%)' }}
                      animate={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }}
                      exit={{ clipPath: 'polygon(0 100%, 0 100%, 0 0, 0 0)' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
