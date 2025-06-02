'use client';
import React from 'react';

const sections = [
  { name: 'About Me', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
    <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
      <span className="text-xl font-bold text-white tracking-wide">Anson Lau</span>
      <ul className="flex gap-8">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={() => scrollToSection(section.id)}
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar; 