import React from 'react';

export function FinancingInfo() {
  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <h5 className="font-medium text-green-800 mb-2">Flexible Financing Options:</h5>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• 6-month term at 25% APR</li>
        <li>• 12-month term at 35% APR</li>
        <li>• Revenue sharing from net metering and carbon credits</li>
        <li>• No upfront costs required</li>
      </ul>
    </div>
  );
}