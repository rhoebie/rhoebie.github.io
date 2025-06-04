import React from 'react'
import { metalOverlay } from '../assets'

const Header = ({ 
    heading = 'Default Heading', 
    subheading = '',
    maskImage = metalOverlay
}) => {
  return (
    <div className="text-center">
      <div
        className="text-[32px] font-bold text-transparent bg-clip-text tracking-[-2px]"
        style={{
          backgroundImage: `url(${maskImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {heading}
      </div>
      {subheading && (
        <p className="mt-2 text-[16px] text-white tracking-[-1px]">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default Header