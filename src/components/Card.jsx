import React from 'react';
import clsx from 'clsx';

const gradientStyles = {
  one: {
    bg: 'bg-[linear-gradient(140deg,_#181646,_#05040C)]',
    border: 'border-[2px] border-[transparent] bg-clip-padding bg-origin-border',
    overlay: 'bg-[linear-gradient(140deg,_#312E81,_#0A0A1B)]',
  },
  two: {
    bg: 'bg-[linear-gradient(307deg,_#181646,_#05040C)]',
    border: 'border-[2px] border-[transparent] bg-clip-padding bg-origin-border',
    overlay: 'bg-[linear-gradient(307deg,_#312E81,_#0A0A1B)]',
  },
};

const Card = ({
  children,
  variant = 'one',
  width = 'w-full',
  height = 'h-auto',
  className = '',
}) => {
  const style = gradientStyles[variant] || gradientStyles.one;

  return (
    <div
      className={clsx(
        `relative rounded-xl p-[1px] ${style.overlay}`,
        width,
        height,
        className
      )}
    >
      <div className={`rounded-xl ${style.bg} w-full h-full`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
