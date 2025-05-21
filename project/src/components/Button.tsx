import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  onClick,
  disabled = false
}) => {
  const baseStyles = "py-3 px-6 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white focus:ring-blue-500",
    secondary: "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400",
    outline: "bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50 focus:ring-blue-500"
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "transform hover:-translate-y-0.5";
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;