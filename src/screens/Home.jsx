import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
}

function Home() {

  return (
    <>
      <h1>Welcome.</h1>
      <Typewriter text="A developer and designer building their dream virtual environment one byte at a time." delay={50} infinite /> 
    </>
  )
}

export default Home;