import { useState, useEffect } from 'react';
import './Stats.css';
import img1 from '../../assets/stats/glbajaj-entrepreneurs-img1.png';
import img3 from '../../assets/stats/glbajaj-entrepreneurs-img3.png';
import img4 from '../../assets/stats/glbajaj-entrepreneurs-img4.png';
import img5 from '../../assets/stats/glbajaj-entrepreneurs-img5.png';
import img10 from '../../assets/stats/glbajaj-entrepreneurs-img10.png';
import ContactForm from '../ContactForm/ContactForm';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Stats = () => {
  const [isHovered, setIsHovered] = useState(false);

  const entrepreneurs = [
    {
      image: img1,
      alt: 'Dhruv Prasher - Co Founder - Clevergene - Indian Biosciences'
    },
    {
      image: img3,
      alt: 'Kajal Shrivastava - Founder & CEO - Nadipulse - Prognostic'
    },
    {
      image: img4,
      alt: 'Gaurav Rajput - Co Founder & CEO - Bigohealth'
    },
    {
      image: img5,
      alt: 'Entrepreneur 4 - Founder - Company Name - Industry'
    },
    {
      image: img10,
      alt: 'Entrepreneur 5 - CEO - Startup - Technology'
    }
  ];

  return (
    <section className="stats-section">
      {/* Top Banner */}
      <div className="stats-banner">
        <div className="stats-banner-content">
          <div className="stats-banner-item">
            <span className="stats-banner-text">Apple <span className='stats-banner-span'>to</span> <span className="highlight-text">Google</span></span>
          </div>
          <div className="stats-banner-item">
            <span className="stats-banner-text">Facebook <span className='stats-banner-span'>to</span> <span className="highlight-text">Amazon</span></span>
          </div>
          <div className="stats-banner-item">
            <span className="stats-banner-text">Microsoft <span className='stats-banner-span'>to</span> <span className="highlight-text">IBM</span></span>
          </div>
        </div>
        <div className="stats-banner-subtitle">
          <h2>GLBians are working with the Top Brands</h2>
        </div>
      </div>      {/* Entrepreneurs Section */}
      <div className="entrepreneurs-section">
        <div className="entrepreneurs-header">
          <h2>GLBajaj's Entrepreneurs are making Upto <span className="highlight-revenue">RS.70 CRORE</span></h2>
          <p className="entrepreneurs-subtitle">Annual Turnover</p>
        </div>

        <div 
          className="flex justify-center items-center w-full px-4 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel 
            className="w-full max-w-[1230px]"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {entrepreneurs.map((entrepreneur, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="entrepreneur-card">
                    <img src={entrepreneur.image} alt={entrepreneur.alt} className="entrepreneur-card-image" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className={`carousel-btn prev-btn -left-12 transition-opacity duration-300 ${
                isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`} 
            />
            <CarouselNext 
              className={`carousel-btn next-btn -right-12 transition-opacity duration-300 ${
                isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`} 
            />
          </Carousel>
        </div>
      </div>

      {/* Bottom Info Cards */}
      <div className="info-cards-section">
        <div className="info-card">
          <h3 className="info-card-title">GLBIANS ACROSS GLOBE</h3>
          <p className="info-card-text">
            GLBians are working with the top MNCs taking GL Bajaj's legacy over the globe - USA, UK, Singapore,
            Germany, Australia, Japan, Canada, Malaysia, New Zeeland
          </p>
        </div>

        <div className="info-card">
          <h3 className="info-card-title">BATCH 2024-25</h3>
          <p className="info-card-text">
            Top industry players including <strong>Paloalto, Amazon, Cadence, Accenture, Intuit, Intel, CICSO, Samsung
            R&D, Hitachi Consulting, Bosch</strong> , and many more have hired GL Bajaj's students.
          </p>
        </div>

        <div className="info-card">
          <h3 className="info-card-title">HIGHEST PACKAGE BATCH 2024-25</h3>
          <p className="info-card-text">
            GL Bajaj student selected at <strong>Rs 58 lakhs package</strong> by Paloalto which is the highest package
            received by an engineering fresher (Batch 2023) in the region
          </p>
        </div>
      </div>

      {/* Contact Form - Visible only on small devices */}
      <div className="mobile-contact-form-wrapper" id="mobile-contact-form">
        <ContactForm />
      </div>
    </section>
  );
};
export default Stats;