import React from 'react';
import { Button } from './Button';

interface CTASectionProps {
  onCalculate: () => void;
}

export function CTASection({ onCalculate }: CTASectionProps) {
  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-900">
          Ready to Switch to Solar?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Calculate your potential savings and find the perfect solar financing solution for your home.
        </p>
        <Button onClick={onCalculate}>Find Your Solar Solution</Button>
      </div>
    </section>
  );
}