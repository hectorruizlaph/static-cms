// app/components/__tests__/PageBuilder.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import PageBuilder from '../PageBuilder';

const comprehensiveTestData = [
  {
    type: 'header',
    props: {
      logoText: 'Test Logo',
      navLinks: [{ text: 'Home', href: '/' }],
    },
  },
  {
    type: 'hero',
    props: {
      title: 'Test Hero Title',
      subtitle: 'Test Hero Subtitle',
      ctaText: 'Test CTA',
      ctaLink: '/test-cta',
    },
  },
  {
    type: 'feature-list',
    props: {
      features: [{ icon: '🌟', title: 'Test Feature', description: 'Test Description' }],
    },
  },
  {
    type: 'pricing',
    props: {
      plans: [{ name: 'Test Plan', price: '$99', features: ['Pricing Feature'] }],
    },
  },
  {
    type: 'call-to-action',
    props: {
      title: 'Test CTA Title',
      subtitle: 'Test CTA Subtitle',
      buttonText: 'Test Button',
      buttonLink: '/test-button',
    },
  },
  {
    type: 'testimonials',
    props: {
      title: 'Testimonials Title',
      testimonials: [{ quote: 'Test Quote', author: 'Test Author', company: 'Test Company' }],
    },
  },
  {
    type: 'footer',
    props: {
      copyright: 'Test Copyright',
      socialLinks: [{ name: 'Facebook', href: 'https://facebook.com/test' }],
    },
  },
  {
    type: 'unknown-component',
    props: {
      someProp: 'someValue',
    },
  },
];

describe('PageBuilder', () => {
  it('renders header component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Test Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders hero component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Test Hero Title')).toBeInTheDocument();
    expect(screen.getByText('Test Hero Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test CTA')).toBeInTheDocument();
  });

  it('renders feature-list component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders pricing component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Test Plan')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    expect(screen.getByText('Pricing Feature')).toBeInTheDocument();
  });

  it('renders call-to-action component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Test CTA Title')).toBeInTheDocument();
    expect(screen.getByText('Test CTA Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders testimonials component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Testimonials Title')).toBeInTheDocument();
    expect(screen.getByText(/Test Quote/)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
  });

  it('renders footer component correctly', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Test Copyright')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
  });

  it('handles unknown component types gracefully', () => {
    render(<PageBuilder components={comprehensiveTestData} />);
    expect(screen.getByText('Unknown Component Type: unknown-component')).toBeInTheDocument();
  });
});