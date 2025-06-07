'use client';
import React, { useState } from 'react';

const sections = [
  { name: 'About Me', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [active, setActive] = useState('about');

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <div className="flex items-center mr-12">
          <span className="text-3xl font-bold text-white tracking-widest select-none">A</span>
        </div>
        {/* Centered menu */}
        <ul className="flex justify-end gap-8">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`text-white font-medium transition-colors px-2 py-1 ${active === section.id ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                onClick={() => {
                  setActive(section.id);
                  scrollToSection(section.id);
                }}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 