import React from 'react';
import clsx from 'clsx';
import { staticImage } from '../assets';

const Logo = ({
  name = 'Label',
  image = staticImage,
  glow = false,
  glowColor = '#ffffff',
}) => {
  return (
    <div
      className={clsx(
        'relative inline-flex items-center px-3 py-2 rounded-full gap-2.5 mx-2.5',
        'bg-[#141239] text-white text-[16px] font-medium overflow-hidden',
        'border-2'
      )}
      style={{
        borderColor: 'rgba(49, 46, 129, 0.46)',
      }}
    >
      {glow && (
        <div
          className="absolute w-10 h-10 rounded-full blur-lg opacity-80 z-0"
          style={{
            backgroundColor: glowColor,
            bottom: '-10px',
            left: '-10px',
          }}
        />
      )}
      <div className="relative z-10 flex items-center gap-2.5">
        <img src={image} alt={name} className="w-[24px] h-[24px]" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Logo;