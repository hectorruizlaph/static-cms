// app/components/Header.tsx
import React from 'react';

interface NavLink {
  text: string;
  href: string;
}

interface HeaderProps {
  logoText: string;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ logoText, navLinks }) => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">{logoText}</div>
      <nav>
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;