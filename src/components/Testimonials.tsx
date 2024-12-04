import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Harare',
    quote: 'Kugarika helped me save $500 annually on my energy bills!',
    rating: 5,
  },
  {
    name: 'John D.',
    location: 'Bulawayo',
    quote: 'The solar installation process was smooth and professional.',
    rating: 5,
  },
  {
    name: 'Grace T.',
    location: 'Mutare',
    quote: 'No more power outages! My business runs smoothly now.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-green-50 p-8 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}