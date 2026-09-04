import { useState, useEffect } from 'react';

type TypewriterOptions = {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
};

export const useTypewriter = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}: TypewriterOptions) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingTimeout, setTypingTimeout] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        // Pause at end of string
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingTimeout);

    // Set speed
    setTypingTimeout(isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, strings, typingSpeed, deletingSpeed, delay, typingTimeout]);

  return text;
};
