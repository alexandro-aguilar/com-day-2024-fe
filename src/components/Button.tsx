import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, type, disabled, onClick }) => (
  <button
    className='className="mt-6 w-full py-3 px-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 
          text-white disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed" primary-button'
    type={ type }
    onClick={ onClick }
    disabled={ disabled }
  >
    { label }
  </button>
);

export default Button;