'use client';
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
  repeatDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  typingSpeed = 30,
  startDelay = 500,
  repeatDelay = 7000,
}) => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Start typing after initial delay
  useEffect(() => {
    if (!mounted) return;
    
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [mounted, startDelay]);

  // Handle typing animation
  useEffect(() => {
    if (!mounted || !isStarted || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [mounted, currentIndex, text, typingSpeed, isStarted]);

  // Handle repeat animation
  useEffect(() => {
    if (!mounted || !isStarted || currentIndex !== text.length) return;

    const repeatTimer = setTimeout(() => {
      setDisplayText('');
      setCurrentIndex(0);
      setIsStarted(false);
    }, repeatDelay);

    return () => clearTimeout(repeatTimer);
  }, [mounted, currentIndex, text.length, repeatDelay, isStarted]);

  // Restart typing after reset
  useEffect(() => {
    if (!mounted || isStarted || currentIndex !== 0 || displayText !== '' || text.length === 0) return;

    const restartTimer = setTimeout(() => {
      setIsStarted(true);
    }, 10);

    return () => clearTimeout(restartTimer);
  }, [mounted, isStarted, currentIndex, displayText, text.length]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <p className={className}></p>;
  }

  return (
    <p className={className}>
      {displayText}
      {currentIndex < text.length && <span className="animate-blink">|</span>}
    </p>
  );
};

export default TypewriterText; 