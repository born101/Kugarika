import React from 'react';
import { ChevronDown } from 'lucide-react';
import { BillInput } from './BillInput';
import { SystemSelector } from './SystemSelector';
import { FinancingInfo } from './FinancingInfo';
import { CalculatorInputs, SolarSystemPackage } from '../../types/calculator';
import { solarPackages } from '../../data/solarPackages';

interface CalculatorInputProps {
  inputs: CalculatorInputs;
  onChange: (name: keyof CalculatorInputs, value: string | SolarSystemPackage) => void;
}

export function CalculatorInput({ inputs, onChange }: CalculatorInputProps) {
  const scrollToNext = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="space-y-8 mb-8">
      <div className="relative pb-12">
        <BillInput 
          value={inputs.monthlyBill}
          onChange={(value) => onChange('monthlyBill', value)}
        />
        <button 
          onClick={() => scrollToNext('solar-systems')}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-green-600 hover:text-green-700 transition-colors p-4 bg-white rounded-full shadow-lg"
          aria-label="View solar systems"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>

      {inputs.monthlyBill && (
        <div id="solar-systems" className="relative pb-12">
          <SystemSelector
            selectedSystem={inputs.selectedSystem}
            onSelect={(system) => onChange('selectedSystem', system)}
            systems={solarPackages}
          />
          {inputs.selectedSystem && (
            <button 
              onClick={() => scrollToNext('financing-info')}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-green-600 hover:text-green-700 transition-colors p-4 bg-white rounded-full shadow-lg"
              aria-label="View financing options"
            >
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </button>
          )}
        </div>
      )}
      
      <div id="financing-info">
        <FinancingInfo />
      </div>
    </div>
  );
}