// app/components/CallToAction.tsx
import React from 'react';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-red-600 text-white py-16 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-xl mt-4">{subtitle}</p>
      <a href={buttonLink} className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold mt-8 inline-block">
        {buttonText}
      </a>
    </section>
  );
};

export default CallToAction;