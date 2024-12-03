import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // typing speed in ms
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(interval); // Stop when all text is typed
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [text, speed]);

  return <>{displayedText}</>;
};

export default TypingEffect;
