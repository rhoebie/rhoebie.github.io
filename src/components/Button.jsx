import React, { useState } from 'react';

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantClasses = {
  primary: 'bg-[#000319] text-white border-[#1E1B4B] hover:bg-[#000214]',
  secondary: 'bg-white text-black border-gray-300 hover:bg-gray-100',
  ghost: 'bg-transparent text-white border-transparent hover:bg-white/10',
};

const pressedClass = 'scale-98';

const Button = ({
  children,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  size = 'md',
  variant = 'primary',
  rounded = 'rounded-[30px]',
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  const iconElement = icon ? (
    <img src={icon} alt="icon" className="w-6 h-6" />
  ) : null;

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`
        border-2
        ${sizeClasses[size] || sizeClasses.md}
        ${variantClasses[variant] || variantClasses.primary}
        ${rounded}
        font-light
        transition
        flex items-center
        gap-3
        cursor-pointer
        select-none
        ${pressed ? pressedClass : ''}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && iconElement}
      {children}
      {icon && iconPosition === 'right' && iconElement}
    </button>
  );
};

export default Button;
