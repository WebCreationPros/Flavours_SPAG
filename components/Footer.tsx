
import React from 'react';
import Logo from './Logo';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      };

    return (
        <footer className="bg-black/50 py-12">
            <div className="container mx-auto px-6 text-center text-brand-light/60">
                <div className="flex justify-center mb-6">
                    <Logo className="h-16 w-auto" />
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    {NAV_LINKS.map(link => (
                        <a 
                            key={`footer-${link.name}`} 
                            href={link.href} 
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="hover:text-brand-yellow transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <p className="text-sm">
                    © {currentYear} Flavours Sports Bar and Grill. All Rights Reserved.
                </p>
                <p className="text-xs mt-2 text-brand-light/40">
                    Website created by an AI expert.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
