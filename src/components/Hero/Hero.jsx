import ContactForm from '../ContactForm/ContactForm';
import './Hero.css';
import logo from '../../assets/hero/logo.png';
import heroImage from '../../assets/hero/hero.webp';

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Confetti/Particles decoration */}
      {/* <div className="confetti-container">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              '--delay': `${Math.random() * 3}s`,
              '--x': `${Math.random() * 100}%`,
              '--rotation': `${Math.random() * 360}deg`,
              '--size': `${Math.random() * 8 + 4}px`,
              '--color': ['#5d4037', '#f4c430', '#ff5722', '#795548', '#ffeb3b'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}
      </div> */}

      {/* Top section with logo */}
      <div className="hero-header">
        <div className="hero-logo-container">
          <img src={logo} alt="GL Bajaj Institute of Technology & Management" className="hero-logo" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="hero-container">
        {/* Left side - Achievement Badge */}
        <div className="hero-content">
          {/* Achievement Badge */}
          <div className="achievement-badge">
            <p className="achievement-text">
              GLBians getting upto <span className="highlight-amount">2.5 Crores</span>
            </p>
            <p className="achievement-subtext">International Package</p>
            <p className="achievement-name">Deepak Mishra, San Francisco - LiveRamp</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="hero-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
