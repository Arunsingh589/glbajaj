import { useState, useEffect } from 'react';
import './TopRecruiters.css';
import accenture from '../../assets/topcompany/glbajaj-placement-accenture1.webp';
import autodesk from '../../assets/topcompany/glbajaj-placement-autodesk.webp';
import cadence from '../../assets/topcompany/glbajaj-placement-cadence.webp';
import capgemini from '../../assets/topcompany/glbajaj-placement-capegemini1.webp';
import commvault from '../../assets/topcompany/glbajaj-placement-comvalt.webp';
import paloalto from '../../assets/topcompany/glbajaj-placement-paloalto.webp';
import servicenow from '../../assets/topcompany/glbajaj-placement-servicenow.webp';
import walmart from '../../assets/topcompany/glbajaj-placement-walmartGlobal.webp';

const TopRecruiters = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showArrows, setShowArrows] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const recruiters = [
    { image: servicenow, alt: 'ServiceNow' },
    { image: walmart, alt: 'Walmart Global Tech' },
    { image: cadence, alt: 'Cadence' },
    { image: autodesk, alt: 'Autodesk' },
    { image: commvault, alt: 'Commvault' },
    { image: accenture, alt: 'Accenture' },
    { image: capgemini, alt: 'Capgemini' },
    { image: paloalto, alt: 'Palo Alto' }
  ];

  // Create extended array for infinite loop effect
  const extendedRecruiters = [...recruiters, ...recruiters, ...recruiters];

  // Handle responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start from the middle set to allow seamless looping
  useEffect(() => {
    setCurrentSlide(recruiters.length);
  }, [recruiters.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching end of middle set
  useEffect(() => {
    if (currentSlide >= recruiters.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(recruiters.length);
      }, 600);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 650);
    } else if (currentSlide <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(recruiters.length);
      }, 600);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 650);
    }
  }, [currentSlide, recruiters.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const getTransformValue = () => {
    const slideWidth = 100 / slidesToShow;
    return currentSlide * slideWidth;
  };

  return (
    <section className="top-recruiters-section">
      <div className="recruiters-header">
        <h2>Top Recruiters-Batch 2024-25</h2>
      </div>
      
      <div 
        className="recruiters-carousel-container"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <div className="recruiters-carousel">
          <div
            className="recruiters-track"
            style={{
              transform: `translateX(-${getTransformValue()}%)`,
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
            }}
          >
            {extendedRecruiters.map((recruiter, index) => (
              <div 
                key={index} 
                className="recruiter-card"
                style={{ minWidth: `${100 / slidesToShow}%` }}
              >
                <div className="recruiter-logo">
                  <img 
                    src={recruiter.image}
                    alt={recruiter.alt}
                    className="recruiter-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          className={`carousel-arrow carousel-arrow-left ${showArrows ? 'show' : ''}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className={`carousel-arrow carousel-arrow-right ${showArrows ? 'show' : ''}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TopRecruiters;
