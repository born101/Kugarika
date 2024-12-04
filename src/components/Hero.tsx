import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onCalculate: () => void;
}

export function Hero({ onCalculate }: HeroProps) {
  return (
    <header className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-green-950/75"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Switch to Solar. Save Money. Secure Reliable Energy.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Affordable solar financing tailored to your needs. Reduce your monthly electricity bills and gain reliable power today.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button icon={Calculator} onClick={onCalculate}>Calculate Your Savings</Button>
            <Button variant="secondary" icon={ArrowRight} onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-xl font-bold">$0</span>
              </div>
              <span className="text-green-100">Upfront Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-xl font-bold">24h</span>
              </div>
              <span className="text-green-100">Approval Time</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}