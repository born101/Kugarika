import React from 'react';
import { DollarSign, Percent, Clock, Lightbulb, Shield, Sun, Zap, Leaf } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: '$0 Upfront Costs',
    description: 'Start your solar journey without any initial investment',
  },
  {
    icon: Shield,
    title: 'Reliable Power',
    description: 'Say goodbye to power cuts with dependable solar energy',
  },
  {
    icon: Zap,
    title: 'Net Metering',
    description: 'Earn credits by feeding excess power back to the grid',
  },
  {
    icon: Leaf,
    title: 'Carbon Credits',
    description: 'Generate additional income through carbon credit trading',
  },
  {
    icon: Sun,
    title: 'Clean Energy',
    description: 'Reduce your carbon footprint with renewable energy',
  },
  {
    icon: Lightbulb,
    title: 'Instant Savings',
    description: 'Start saving on energy costs from day one',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-900">
          Why Choose Kugarika?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-green-600 mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}