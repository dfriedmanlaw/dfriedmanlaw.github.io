import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const shapeClass = 'rounded-md';
  
  const colorClass = {
    primary: "bg-tech-primary border-tech-primary text-white hover:bg-tech-primary/90 hover:border-tech-primary/90 focus:ring-tech-primary shadow-sm",
    outline: "border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white focus:ring-tech-primary",
    text: "border-transparent text-tech-muted hover:text-tech-primary focus:ring-tech-primary",
  };

  const baseStyles = `inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed border ${shapeClass} ${colorClass.primary.split(' ').pop()}`; // Hack for ring color, simpler to just use base
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed border ${shapeClass} ${colorClass[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;