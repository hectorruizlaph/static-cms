// app/components/Pricing.tsx
import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface PricingProps {
  plans: Plan[];
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <section className="py-16 px-4 bg-white text-center w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 mx-3 border border-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-600">{plan.name}</h2>
            <p className="text-4xl font-extrabold text-blue-600 mt-4">{plan.price}</p>
            <ul className="text-left mt-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;