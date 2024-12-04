import React from 'react';
import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#features" className="hover:text-green-300 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-green-300 transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-green-300 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}