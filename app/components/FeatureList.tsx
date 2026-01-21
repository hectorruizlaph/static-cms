// app/components/FeatureList.tsx
import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <section className="py-16 px-4 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
          <span className="text-4xl">{feature.icon}</span>
          <h3 className="text-xl font-bold mt-4 text-gray-600">{feature.title}</h3>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureList;