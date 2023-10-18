import React, { useState, useEffect } from 'react';
import btn from '../images/btt_btn.png'

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <input
      type='image'
      className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={handleBackToTop}
      src={btn}
      height="40px"
      width="40px"
      alt="top-btn"
      label="Back To Top"
      title='Back To Top'
    />
  );
};

export default FloatingButton;