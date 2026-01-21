// app/components/Footer.tsx
import React from 'react';

interface SocialLink {
  name: string;
  href: string;
}

interface FooterProps {
  copyright: string;
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ copyright, socialLinks }) => {
  return (
    <footer className="black text-white p-8 text-center">
      <p className="mb-4">{copyright}</p>
      <ul className="flex justify-center space-x-4">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-blue-400">{link.name}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;