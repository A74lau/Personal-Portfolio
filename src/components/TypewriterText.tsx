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
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, typingSpeed, isStarted]);

  useEffect(() => {
    if (isStarted && currentIndex === text.length) {
      const repeatTimer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsStarted(false);
      }, repeatDelay);

      return () => clearTimeout(repeatTimer);
    }
  }, [currentIndex, text.length, repeatDelay, isStarted]);

  useEffect(() => {
    if (!isStarted && currentIndex === 0 && displayText === '' && text.length > 0) {
      const restartTimer = setTimeout(() => {
        setIsStarted(true);
      }, 10);

      return () => clearTimeout(restartTimer);
    }
  }, [isStarted, currentIndex, displayText, text.length]);

  return (
    <p className={className} suppressHydrationWarning={true}>
      {displayText}
      {currentIndex < text.length && <span className="animate-blink">|</span>}
    </p>
  );
};

export default TypewriterText; 