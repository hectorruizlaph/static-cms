// app/components/Testimonials.tsx
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-600">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <blockquote className="text-lg italic text-gray-700">"{testimonial.quote}"</blockquote>
            <cite className="block font-bold mt-4 text-gray-600">
              - {testimonial.author}, {testimonial.company}
            </cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;