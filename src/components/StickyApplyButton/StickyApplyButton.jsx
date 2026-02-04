import { useState, useEffect } from 'react';
import './StickyApplyButton.css';

const StickyApplyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContactForm = () => {
    const contactForm = document.querySelector('.mobile-contact-form-wrapper');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <button
      className={`sticky-apply-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToContactForm}
      aria-label="Apply Now"
    >
      APPLY NOW
    </button>
  );
};

export default StickyApplyButton;
