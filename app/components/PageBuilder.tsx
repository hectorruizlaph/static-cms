// app/components/PageBuilder.tsx
import Header from './Header';
import Hero from './Hero';
import FeatureList from './FeatureList';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Footer from './Footer';

const componentMap: { [key: string]: React.FC<any> } = {
  header: Header,
  hero: Hero,
  'feature-list': FeatureList,
  pricing: Pricing,
  'call-to-action': CallToAction,
  testimonials: Testimonials,
  footer: Footer,
};

interface PageBuilderProps {
  components: Array<{
    type: string;
    props: any;
  }>;
}

const PageBuilder: React.FC<PageBuilderProps> = ({ components }) => {
  return (
    <>
      {components.map((componentData, index) => {
        const Component = componentMap[componentData.type];
        if (!Component) {
          return <div key={index}>Unknown Component Type: {componentData.type}</div>;
        }
        return <Component key={index} {...componentData.props} />;
      })}
    </>
  );
};

export default PageBuilder;