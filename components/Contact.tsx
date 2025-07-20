
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialIcon: React.FC<{href: string; children: React.ReactNode}> = ({href, children}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a href={href} className="relative z-10 block text-brand-light/70 hover:text-brand-yellow transition duration-300 text-3xl">
        {children}
      </a>
      <div className="absolute inset-[-6px] rounded-full overflow-hidden -z-10">
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
  );
}

const Contact: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
            className="h-96 w-full rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          {/* Google Maps Embed Placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.225389811579!2d-79.46733202381669!3d43.70275827110191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33e2a7605e55%3A0x8bbec121287612f0!2sFlavours%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sca!4v1689366624535!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Flavours Location"
          ></iframe>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-6xl text-brand-yellow tracking-wide">Visit Us</h2>
          <div className="mt-6 space-y-4 text-lg text-brand-light/90">
            <div>
              <h3 className="font-bold text-xl text-brand-green">Address</h3>
              <p>2290 Keele St, North York, ON M6M 3Z9</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-brand-green">Hours</h3>
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 12am</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-brand-green">Phone</h3>
              <p>(416) 123-4567 (Placeholder)</p>
            </div>
          </div>
          <div className="mt-8 flex space-x-8">
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
            <SocialIcon href="#"><FaFacebook /></SocialIcon>
            <SocialIcon href="#"><FaTwitter /></SocialIcon>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
