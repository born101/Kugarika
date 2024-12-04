import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import { CalculatorInput } from './calculator/CalculatorInput';
import { LoanOptions } from './calculator/LoanOptions';
import { calculateLoanOptions } from '../utils/calculatorUtils';
import { CalculatorInputs, SolarSystemPackage } from '../types/calculator';

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Calculator({ isOpen, onClose }: CalculatorProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyBill: '',
    selectedSystem: undefined
  });

  const handleInputChange = (name: keyof CalculatorInputs, value: string | SolarSystemPackage) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  const loanOptions = calculateLoanOptions(inputs.monthlyBill, inputs.selectedSystem);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-2xl font-bold text-green-900">Solar Loan Calculator</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close calculator"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <CalculatorInput inputs={inputs} onChange={handleInputChange} />
          {loanOptions && <LoanOptions options={loanOptions} />}
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
          <Button variant="primary" onClick={onClose}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}