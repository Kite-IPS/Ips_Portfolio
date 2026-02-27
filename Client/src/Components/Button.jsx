import React from 'react';
import clsx from 'clsx';

const Button = ({ children, type, color, onclick }) => {
  // Use explicit class maps so Tailwind JIT can detect them
  const filledStyles = {
    'blue-600': 'bg-blue-600 text-white',
  };
  const outlinedStyles = {
    'blue-600': 'border border-blue-600 text-blue-600',
  };

  const colorClass = type === 'filled'
    ? (filledStyles[color] || `bg-${color} text-white`)
    : (outlinedStyles[color] || `border border-${color} text-${color}`);

  return (
    <div
      onClick={onclick}
      className={clsx(
        "px-4 py-3 sm:px-5 sm:py-3.5 md:px-7 md:py-4 rounded-lg cursor-pointer text-sm sm:text-base transition-all duration-300",
        colorClass,
      )}
    >
      {children}
    </div>
  );
};

export default Button;
