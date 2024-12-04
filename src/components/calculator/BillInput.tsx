import React from 'react';

interface BillInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function BillInput({ value, onChange }: BillInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Monthly Electricity Bill ($)
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        placeholder="e.g., 60"
      />
      <p className="mt-2 text-sm text-gray-500">
        Enter your average monthly electricity bill to see personalized financing options
      </p>
    </div>
  );
}