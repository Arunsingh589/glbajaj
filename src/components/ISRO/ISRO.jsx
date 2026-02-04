import { useState, useRef, useEffect } from 'react';
import './ISRO.css';
import bgImage from '../../assets/isro/bg.webp';
import guest1 from '../../assets/isro/guest1.webp';
import guest2 from '../../assets/isro/guest2.webp';
import guest3 from '../../assets/isro/guest3.webp';

// Import carousel images
import slider1 from '../../assets/isro/slider/KajalShrivastava22.webp';
import slider2 from '../../assets/isro/slider/b-2.jpg';
import slider3 from '../../assets/isro/slider/b-5.jpg';
import slider4 from '../../assets/isro/slider/glbajaj-bootcamp-mit.jpg';
import slider5 from '../../assets/isro/slider/kajal24.webp';
import slider6 from '../../assets/isro/slider/kavach23.webp';
import slider7 from '../../assets/isro/slider/kushagra24.webp';
import slider8 from '../../assets/isro/slider/nikkiJha22.webp';

const ISRO = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const carouselRef = useRef(null);

  const images = [guest1, guest2, guest3];
  const carouselImages = [
    { img: slider1, title: 'Kajal Shrivastava - Outstanding Achievement' },
    { img: slider2, title: 'Innovation Excellence Award' },
    { img: slider3, title: 'Technical Excellence Recognition' },
    { img: slider4, title: 'MIT Bootcamp Achievement' },
    { img: slider5, title: 'Kajal - Academic Excellence' },
    { img: slider6, title: 'Kavach 2023 - Cybersecurity Challenge' },
    { img: slider7, title: 'Kushagra - Outstanding Performance' },
    { img: slider8, title: 'Nikki Jha - Research Excellence' }
  ];

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToImage = (index) => {
    if (!isTransitioning && index !== currentImage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Carousel scroll functions
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isCarouselHovered) return;

    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    let scrollPos = 0;

    const autoScroll = setInterval(() => {
      scrollPos += 1;
      carousel.scrollLeft = scrollPos;

      // Reset to start when reaching the end
      if (scrollPos >= scrollWidth - clientWidth) {
        scrollPos = 0;
      }
    }, 30);

    return () => clearInterval(autoScroll);
  }, [isCarouselHovered]);

  return (
    <section className="isro-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="isro-container">
        {/* Left side - Content */}
        <div className="isro-left-content">
          {/* Title */}
          <div className="isro-title-section">
            <h2 className="isro-main-title">Former ISRO Chairman</h2>
            <h3 className="isro-subtitle">Dr.K.Sivan at GL Bajaj</h3>
            <p className="isro-event">Inaugural Ceremony of NVIDIA AI Learning and Research Center</p>
          </div>

          {/* Image Slider */}
          <div 
            className="isro-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="isro-slider">
              <div className={`slider-image-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
                <img 
                  src={images[currentImage]} 
                  alt={`Guest ${currentImage + 1}`} 
                  className="isro-image"
                />
              </div>
              
              {/* Navigation buttons - shown on hover */}
              {isHovered && (
                <>
                  <button 
                    className="slider-btn prev-btn" 
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button 
                    className="slider-btn next-btn" 
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}

              {/* Dots indicator */}
              <div className="slider-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentImage === index ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Students Achievements Title */}
          <h2 className="carousel-title-inline">Students Achievements</h2>
        </div>

        {/* Right side - Text Content */}
        <div className="isro-content">
          <div className="isro-text-wrapper">
            <h2 className="isro-heading">The Right Environment</h2>
            
            <p className="isro-description">
              What if you could be the change you want to see in the world? At GL Bajaj we believe 
              not only in advocating change for the better in education, research and service. We 
              believe in living it.
            </p>

            <blockquote className="isro-quote">
              <p className="quote-text">
                I am happy that GL Bajaj Institute of Technology and Management has a number 
                disciplines under engineering that are needed for the country. I am happy to 
                learn that GL Bajaj is working for high level of innovation with students to achieve 
                their dreams with capacity of leadership for entrepreneurship.
              </p>
              <cite className="quote-author">
                - LATE DR. APJ ABDUL KALAM <span className="author-title">Hon'ble Former President of India</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Carousel Section */}
      <div className="achievements-carousel-section">
        
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <div className="carousel-container" ref={carouselRef}>
            <div className="carousel-track">
              {/* Duplicate images for infinite scroll effect */}
              {[...carouselImages, ...carouselImages, ...carouselImages].map((item, index) => (
                <div key={index} className="carousel-card">
                  <div className="carousel-card-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="carousel-card-content">
                    <h3 className="carousel-card-title">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - shown on hover */}
          {isCarouselHovered && (
            <>
              <button 
                className="carousel-nav-btn carousel-prev" 
                onClick={() => scrollCarousel('left')}
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button 
                className="carousel-nav-btn carousel-next" 
                onClick={() => scrollCarousel('right')}
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ISRO;
