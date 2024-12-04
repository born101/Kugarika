import React from 'react';
import { Leaf } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Leaf className="w-6 h-6 text-green-500" />
      <span className="font-bold text-xl">Kugarika</span>
    </div>
  );
}