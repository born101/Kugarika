import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQData } from '../types/faq';

interface FAQItemProps {
  faq: FAQData;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ faq, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-green-900">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 bg-green-50/50">
          {faq.answer}
        </div>
      )}
    </div>
  );
}