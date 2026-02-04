import { useState, useEffect } from "react";
import "./AboutUs.css";
import aboutBg from "../../assets/aboutus/aboutbg.webp";
import bottomBg from "../../assets/aboutus/bg.webp";

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      text: "It was a pleasure meeting all of you and seeing the facility at GL Bajaj. I am truly honoured and the whole experience has been unforgettable and in a way fascinating. The incubator and innovation centers have truly captured my imagination and so also the enthusiasm and ideas that your students had shared with me. All the Best.",
      name: "SUMAL ABRAHAM VARGHESE",
      position: "Adventz Group (Formerly K.K. Birla Group)",
      designation: "Senior Group Manager Hr",
      scale: "scale-large",
    },
    {
      text: "Great Hospitality & Infrastructure, Students selection have been good. Hoping that all of them join us. All the best.",
      name: "SWETA BHARATIYA",
      position: "IBM",
      designation: "Deputy Group Manager University Hiring",
      scale: "scale-medium",
    },
    {
      text: "We are happy to be associated with G.L. Bajaj, one of the leading institute in North India, the institute has responsive and proactive approach. It's good to see how the students are being taught according to the need of the industry with topics like Artificial Intelligence, Machine Learning IoT & the Students are well prepared. The Educational objective of each department is well defined and students well met those objectives. G.L. Bajaj Team, All the best for the year 2020.",
      name: "BHARATH KAKAIAH",
      position: "Robert Bosch Engineering and Business Solutions Pvt. Ltd.",
      designation: "Campus Recruitment Lead",
      scale: "scale-small",
    },
  ];

  const changeTestimonial = (index) => {
    if (index === currentTestimonial) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [changeTestimonial, currentTestimonial, testimonials.length]);

  return (
    <>
      <section
        className="aboutus-section"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="aboutus-overlay"></div>

        <div className="aboutus-container">
          <div className="aboutus-content">
            <div className="aboutus-header">
              <h2 className="aboutus-title">
                <span className="title-line">—</span>
                What People Says About Us
                <span className="title-line">—</span>
              </h2>
            </div>

            <div className="testimonial-container">
              <div
                className={`testimonial-content ${
                  isTransitioning ? "fade-out" : "fade-in"
                }`}
              >
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].text}
                </p>

                <div className="testimonial-author">
                  <h4 className="author-name">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="author-position">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="author-designation">
                    {testimonials[currentTestimonial].designation}
                  </p>
                </div>
              </div>

              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                    onClick={() => changeTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`bottom-image-section ${testimonials[currentTestimonial].scale}`}
        style={{ backgroundImage: `url(${bottomBg})` }}
      ></div>
    </>
  );
};

export default AboutUs;
