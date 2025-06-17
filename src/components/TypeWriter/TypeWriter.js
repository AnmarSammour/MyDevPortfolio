import React, { useState, useEffect } from 'react';
import styles from './TypeWriter.module.css';

const TypeWriter = ({ texts, speed = 200, deleteSpeed = 100, delay = 1000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      if (charIndex <= texts[textIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (charIndex >= 0) {
        timeout = setTimeout(() => {
          setCurrentText(texts[textIndex].substring(0, charIndex));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

  return (
    <span className={styles.typeWriter}>
      {currentText}
      <span className={styles.writerLine}></span>
    </span>
  );
};

export default TypeWriter;