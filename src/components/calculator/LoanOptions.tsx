import React from 'react';
import { LoanOption } from '../../types/calculator';

interface LoanOptionsProps {
  options: LoanOption[];
}

export function LoanOptions({ options }: LoanOptionsProps) {
  return (
    <div className="space-y-6">
      <h4 className="font-semibold text-lg text-green-900">Financing Options for {options[0].systemDetails.name}</h4>
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h5 className="font-medium text-green-800 mb-2">System Specifications:</h5>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <span className="text-gray-600">Capacity:</span>
            <span className="ml-1 font-medium">{options[0].systemDetails.capacity}</span>
          </div>
          <div>
            <span className="text-gray-600">Daily Output:</span>
            <span className="ml-1 font-medium">{options[0].systemDetails.dailyOutput}</span>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p className="font-medium mb-1">Components Included:</p>
          <ul className="list-disc list-inside">
            {options[0].systemDetails.components.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {options.map((option, index) => (
        <div
          key={index}
          className="border border-green-100 rounded-lg p-6 bg-green-50 hover:shadow-md transition-all space-y-4"
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl text-green-900">
              {option.loanTerm} Month Plan
            </span>
            <span className="text-green-600 font-medium">
              {option.interestRate}% APR
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Payment:</span>
                <span className="font-medium">${option.monthlyPayment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Energy Savings:</span>
                <span className="font-medium text-green-600">-${option.monthlySavings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Net Metering:</span>
                <span className="font-medium text-green-600">-${option.revenueStreams.netMetering}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carbon Credits:</span>
                <span className="font-medium text-green-600">-${option.revenueStreams.carbonCredits}</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Net Monthly Cost:</span>
                <span className="text-xl font-bold text-green-600">${option.netMonthly}</span>
              </div>
              <p className="text-xs text-gray-500">
                After savings and revenue from net metering and carbon credits
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}