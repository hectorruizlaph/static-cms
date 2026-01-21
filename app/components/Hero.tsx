// app/components/Hero.tsx

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-blue-800 text-white py-20 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{subtitle}</p>
      <a href={ctaLink} className="bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold mt-8 inline-block">
        {ctaText}
      </a>
    </section>
  );
};

export default Hero;