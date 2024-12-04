import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Calculator } from './components/Calculator';
import { Stats } from './components/Stats';
import { CTASection } from './components/CTASection';

function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero onCalculate={() => setIsCalculatorOpen(true)} />
      <Features />
      <FAQ />
      <Stats />
      <CTASection onCalculate={() => setIsCalculatorOpen(true)} />
      <Calculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;