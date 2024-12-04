import React from 'react';
import { DollarSign, Leaf, Clock, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: typeof DollarSign;
  value: string;
  label: string;
  sublabel?: string;
}

function StatItem({ icon: Icon, value, label, sublabel }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-green-800/50 rounded-lg">
      <Icon className="w-8 h-8 text-green-300 mb-3" />
      <div className="text-4xl font-bold mb-2 text-white">{value}</div>
      <div className="text-green-300 text-center">
        <div className="font-medium">{label}</div>
        {sublabel && (
          <div className="text-sm text-green-400 mt-1">{sublabel}</div>
        )}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 bg-green-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          The Impact of Solar Energy
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <StatItem
            icon={DollarSign}
            value="$50"
            label="Monthly Savings"
            sublabel="Average per household"
          />
          <StatItem
            icon={TrendingUp}
            value="$600"
            label="Yearly Savings"
            sublabel="Projected annual benefit"
          />
          <StatItem
            icon={Leaf}
            value="1,500kg"
            label="CO₂ Reduced"
            sublabel="Per household yearly"
          />
          <StatItem
            icon={Clock}
            value="4-6"
            label="Year Payback"
            sublabel="Return on investment"
          />
        </div>
      </div>
    </section>
  );
}