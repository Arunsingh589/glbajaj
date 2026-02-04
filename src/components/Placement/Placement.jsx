import React, { useEffect, useRef, useState } from 'react';
import './Placement.css';
import bgCampus from '../../assets/placement/bg-campus.webp';
import placementBanner from '../../assets/placement/placement-baner-image22.png';

const Placement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="placement-section"
      style={{ backgroundImage: `url(${bgCampus})` }}
    >
      <div className="placement-container">
        <div className="placement-row">
          {/* Left Section */}
          <div className="placement-left">
            <div className={`placement-content ${isVisible ? 'animate' : ''}`}>
              <h2 className="placement-heading line line-1">
                Placement Summary
              </h2>
              <div className="heading-underline line line-1"></div>
              
              <p className="placement-description line line-2">
                GL Bajaj has consistently maintained an excellent recruitment record. The graduates and post- graduates have been recruited by leading corporate.
              </p>

              <div className="placement-list">
                <div className="placement-item line line-3">
                  <span className="checkmark">✓</span>
                  <span className="item-text">Highest Package 58 LPA</span>
                </div>
                
                <div className="placement-item line line-4">
                  <span className="checkmark">✓</span>
                  <span className="item-text">Average Package 7.35 LPA</span>
                </div>
                
                <div className="placement-item line line-5">
                  <span className="checkmark">✓</span>
                  <span className="item-text">Total Recruiters 500+</span>
                </div>
                
                <div className="placement-item line line-6">
                  <span className="checkmark">✓</span>
                  <span className="item-text">Top Recruiters - Palo Alto, Servicenow, Autodesk, Commvault, Walmart Global, Accenture, Capgemini</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={`placement-right ${isVisible ? 'animate' : ''}`}>
            <div className="placement-right-content">
              <h2 className="right-heading">
                We measure our success by the success of our students
              </h2>
              
              <div className="placement-image-wrapper">
                <img 
                  src={placementBanner} 
                  alt="GL Bajaj Placements" 
                  className="placement-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
