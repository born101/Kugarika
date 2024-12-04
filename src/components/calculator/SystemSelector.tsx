import React from 'react';
import { SolarSystemPackage } from '../../types/calculator';

interface SystemSelectorProps {
  selectedSystem?: SolarSystemPackage;
  onSelect: (system: SolarSystemPackage) => void;
  systems: SolarSystemPackage[];
}

export function SystemSelector({ selectedSystem, onSelect, systems }: SystemSelectorProps) {
  return (
    <div id="solar-systems" className="space-y-4">
      <h5 className="font-medium text-green-800">Select Your Solar System Package:</h5>
      <div className="grid gap-4">
        {systems.map((pkg) => (
          <div
            key={pkg.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedSystem?.id === pkg.id
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => onSelect(pkg)}
          >
            <div className="flex justify-between items-start mb-2">
              <h6 className="font-semibold text-green-900">{pkg.name}</h6>
              <span className="font-bold text-green-600">${pkg.cost}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Capacity:</span>
                <span className="ml-1 font-medium">{pkg.capacity}</span>
              </div>
              <div>
                <span className="text-gray-500">Daily Output:</span>
                <span className="ml-1 font-medium">{pkg.dailyOutput}</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-600 mb-1">Includes:</p>
              <ul className="text-sm text-gray-500 list-disc list-inside">
                {pkg.components.map((component, index) => (
                  <li key={index}>{component}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}