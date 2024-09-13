import React from 'react';

interface ButtonProps {
  className?: string
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, label, onClick }) => (
  <button
    className={ className }
    onClick={ onClick }
  >
    { label }
  </button>
);

export default Button;