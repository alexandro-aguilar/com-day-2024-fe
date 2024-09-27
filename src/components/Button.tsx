import React from 'react';

interface ButtonProps {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => (
  <button
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    type={type}
    onClick={ onClick }
  >
    { label }
  </button>
);

export default Button;