import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-green-950 text-green-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-sm mt-4">
              Empowering Zimbabwe with affordable solar solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Solar Calculator
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>info@kugarika.co.zw</li>
              <li>+263 242 123456</li>
              <li>Harare, Zimbabwe</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Kugarika. All rights reserved.
        </div>
      </div>
    </footer>
  );
}