import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
}

export function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2";
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    secondary: "bg-white hover:bg-green-50 text-green-800"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}