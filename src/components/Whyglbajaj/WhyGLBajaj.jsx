import React from 'react';
import './Whyglbajaj.css';
import outstandingPlacementAward from '../../assets/whyglbajaj/outstanding-placement-award.png';
import tieUp from '../../assets/whyglbajaj/ti-up.png';
import scholarship from '../../assets/whyglbajaj/scholarship.png';
import faculty from '../../assets/whyglbajaj/faculty.png';

const WhyGLBajaj = () => {
  const features = [
    {
      id: 1,
      imagePath: outstandingPlacementAward,
      heading: 'Reorganization',
      title: 'Recognized as SCIENTIFIC & INDUSTRIAL RESEARCH Organization by department of Science and Technology, GOI',
      alt: 'Government of India Emblem'
    },
    {
      id: 2,
      imagePath: tieUp,
      heading: 'Tie-up with MSME',
      title: "Tie-up with MSME, Govt. of India for establishing 'Startups'",
      alt: 'Partnership Handshake'
    },
    {
      id: 3,
      imagePath: scholarship,
      heading: 'Scholarship',
      title: 'Upto 100% scholarship for meritorious students',
      alt: 'Education and Scholarship'
    },
    {
      id: 4,
      imagePath: faculty,
      heading: 'Academicians and Researchers',
      title: 'A Squad of Around 300+ Academicians and Researchers',
      alt: 'Team of Academicians'
    }
  ];

  return (
    <section className="why-gl-bajaj">
      <div className="container">
        <h2 className="section-title">Why GL Bajaj?</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="icon-wrapper">
                <img 
                  src={feature.imagePath} 
                  alt={feature.alt}
                  className="feature-icon"
                  loading="lazy"
                />
              </div>
              <h3 className="feature-heading">{feature.heading}</h3>
              <p className="feature-description">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGLBajaj;