import React from 'react';

const Text = ({
  children,
  className = '',
  color = 'text-gray-900',
  size = 'text-base',
  weight = 'font-normal',
  align = 'text-left',
  selectable = false,
  ...props
}) => {
  return (
    <p
      className={`${color} ${size} ${weight} ${align} ${className} ${selectable ? 'select-text' : 'select-none'}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
