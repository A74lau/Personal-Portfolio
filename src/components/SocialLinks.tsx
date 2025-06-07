'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/A74lau/' }, 
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/anson-lau-9673641b8/' }, 
  { icon: FaEnvelope, url: 'mailto:a74lau@gmail.com' }, 
  { icon: FaInstagram, url: 'https://www.instagram.com/anson___lau/' }, 
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-6 mb-8">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-4xl"
          aria-label={`Link to ${link.icon.name}`}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 