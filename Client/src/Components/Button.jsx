import React from 'react';
import clsx from 'clsx';

const Button = ({ children, type, color, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={clsx(
        "px-7 py-4 rounded-lg cursor-pointer",
        type === "filled" ? `bg-${color} text-white` : `border border-${color} text-${color}`,
      )}
    >
      {children}
    </div>
  );
};

export default Button;
