import React from 'react';
import { LoanOption } from '../../types/calculator';

interface DetailedInfoProps {
  option: LoanOption;
}

export function DetailedInfo({ option }: DetailedInfoProps) {
  return (
    <div className="mt-8 pt-8 border-t border-green-100">
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h5 className="font-medium text-green-800 mb-2">System Specifications</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-between">
              <span>System Capacity:</span>
              <span className="font-medium">{option.systemDetails.capacity}</span>
            </li>
            <li className="flex justify-between">
              <span>Daily Output:</span>
              <span className="font-medium">{option.systemDetails.dailyOutput}</span>
            </li>
            <li className="mt-2">
              <span className="font-medium block mb-1">Components:</span>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {option.systemDetails.components.map((component, index) => (
                  <li key={index}>{component}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h5 className="font-medium text-green-800 mb-2">Long-term Benefits</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-between">
              <span>Total System Cost:</span>
              <span className="font-medium">${option.systemCost}</span>
            </li>
            <li className="flex justify-between">
              <span>Loan Term:</span>
              <span className="font-medium">{option.loanTerm} months</span>
            </li>
            <li className="flex justify-between">
              <span>Interest Rate:</span>
              <span className="font-medium">{option.interestRate}% APR</span>
            </li>
            <li className="flex justify-between">
              <span>Total Interest:</span>
              <span className="font-medium">${option.totalInterest}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}