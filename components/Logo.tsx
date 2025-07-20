import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 200 60"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FED100', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#009B77' }} />
        <stop offset="50%" style={{ stopColor: '#FED100' }} />
        <stop offset="100%" style={{ stopColor: '#009B77' }} />
      </linearGradient>
    </defs>
    
    <g transform="translate(0, 5)">
      {/* Flame */}
      <path d="M 12 20 Q 15 10, 20 20 Q 25 30, 20 40 Q 15 30, 12 20 Z" fill="url(#flameGradient)" transform="rotate(-15 16 30)">
        <animateTransform attributeName="transform" type="scale" from="1" to="1.1" dur="2s" repeatCount="indefinite" additive="sum" accumulate="sum" />
      </path>

      {/* Main Text */}
      <text
        x="28"
        y="40"
        fontFamily='"Luckiest Guy", cursive'
        fontSize="36"
        fill="url(#textGradient)"
        stroke="#1a1a1a"
        strokeWidth="1"
        paintOrder="stroke"
        letterSpacing="1"
      >
        Flavours
      </text>

      {/* Sub Text */}
      <text
        x="30"
        y="54"
        fontFamily="Poppins, sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="#FED100"
        letterSpacing="0.5"
      >
        SPORTS BAR AND GRILL
      </text>
    </g>
  </svg>
);

export default Logo;