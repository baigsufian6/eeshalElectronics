import React, { useState, useEffect } from 'react';
import img1 from './Images/cctvpic1.jpg'
import img2 from './Images/cctvpic2.jpg'
import img3 from './Images/cctvpic3.jpg'
import img4 from './Images/resi.jpg'
import img5 from './Images/corp.jpg'
import img6 from './Images/indus.jpg'
import './Home.css';
// If you're using React with npm, you should install react-icons
// import { IoChevronBack, IoChevronForward, IoHomeOutline, IoBusinessOutline, IoConstructOutline, IoArrowForward } from "react-icons/io5";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Carousel data
  const carouselData = [
    {
      id: 1,
      title: "Welcome to Security",
      subtitle: "24/7 Control of Your Security Made Easy.",
      description: "Working with customer realizing—that is, showing customers how to determine comparative issues later on.",
      image: img3
    },
    {
      id: 2,
      title: "Advanced Protection",
      subtitle: "Smart Solutions for Modern Security.",
      description: "Comprehensive security systems with the latest technologies to keep you safe.",
      image: img2
    },
    {
      id: 3,
      title: "Peace of Mind",
      subtitle: "Security That Works When You Need It.",
      description: "Round-the-clock monitoring and rapid response to protect what matters most.",
      image: img1
    }
  ];

  // Service cards data
  const serviceData = [
    {
      id: 1,
      title: "Residential",
      icon: "🏠",
      image: img4,
      description: "Comprehensive home security solutions to protect your family and property with 24/7 monitoring and smart controls."
    },
    {
      id: 2,
      title: "Corporate",
      icon: "🏢",
      image: img5,
      description: "Enterprise-grade security systems designed for businesses of all sizes with access control and surveillance options."
    },
    {
      id: 3,
      title: "Industrial",
      icon: "🏭",
      image: img6,
      description: "Heavy-duty security solutions for manufacturing plants, warehouses and industrial facilities with advanced monitoring."
    }
  ];

  // Handle scrolling for header effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Carousel controls
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Service Card Component
  const ServiceCard = ({ title, icon, description, image }) => {
    return (
      <div className="service-card">
        {image && (
          <div className="service-image" style={{ backgroundImage: `url(${image})` }} />
        )}
        <div className="service-content">
          <div className="service-icon">
            {icon}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="read-more">
            Read More 
            <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="app">

      {/* Hero Carousel */}
      <section className="hero" id="home">
        <div className="carousel">
          {carouselData.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-content">
                <div className="carousel-text">
                  <h4>{slide.title}</h4>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.description}</p>
                  <div className="carousel-buttons">
                    <button className="btn primary">LEARN MORE</button>
                    <button className="btn secondary">CONTACT US</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button className="carousel-control prev" onClick={prevSlide}>
            ←
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            →
          </button>
          
          <div className="carousel-indicators">
            {carouselData.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <div className="services-intro animate-element">
              <h2>WHO WE ARE</h2>
              <h3>When you need better security installation</h3>
              <p className="services-description">We provide comprehensive security solutions tailored to your specific needs, ensuring the highest level of protection for your home, business, or industrial facility.</p>
              <button className="view-all">VIEW ALL SERVICES</button>
            </div>
          </div>
          <div className="services-grid">
            {serviceData.map((service, index) => (
              <div key={service.id} className={`animate-card card-${index + 1}`}>
                <ServiceCard 
                  title={service.title}
                  icon={service.icon}
                  image={service.image}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-content">
            <h2 className="animate-element">24/7 Control of Your Security Made Easy.</h2>
            <p className="animate-element">Working with customers to provide comprehensive security solutions tailored to your needs.</p>
            <div className="feature-buttons animate-element">
              <button className="btn primary">LEARN MORE</button>
              <button className="btn secondary">CONTACT US</button>
            </div>
          </div>
        </div>
        <div className="wave-decoration"></div>
      </section>
    </div>
  );
}

export default Home;