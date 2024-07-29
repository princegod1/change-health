import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserMd, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Import images
import heroImage from './images/ho.jpeg';
import doctorImage from './images/dot.jpeg';
import nurseImage from './images/no.jpeg';
import logo from './images/lo.jpeg';

// Import components
import ContactUs from './ContactUs';
import BookAppointment from './BookAppointment';

// CSS for Animation
const animationStyles = {
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
};

// Components
const Header = () => (
  <header style={{ backgroundColor: 'black', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <img src={logo} alt="Healthcare Logo" style={{ width: '100px' }} />
    <nav>
      <Link to="/" style={{ color: 'white', margin: '0 15px' }}><FaHome /> Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 15px' }}><FaInfoCircle /> About Us</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 15px' }}><FaUserMd /> Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 15px' }}><FaEnvelope /> Contact Us</Link>
      <Link to="/book" style={{ color: 'white', margin: '0 15px' }}><FaCalendarAlt /> Book Appointment</Link>
    </nav>
  </header>
);

const HeroSection = () => (
  <header style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 20px', color: 'white', textAlign: 'center' }}>
    <div>
      <h1>Your Health, Our Priority</h1>
      <p>Providing top-notch healthcare services with care and compassion.</p>
      <a href="#book" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>Book an Appointment</a>
    </div>
  </header>
);

const ServicesOverview = () => (
  <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa' }}>
    <h2>Our Services</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ textAlign: 'center', maxWidth: '300px' }}>
        <div>👨‍⚕️</div>
        <h3>General Checkups</h3>
        <p>Routine checkups to keep you healthy.</p>
      </div>
      <div style={{ textAlign: 'center', maxWidth: '300px' }}>
        <div>🦷</div>
        <h3>Dental Care</h3>
        <p>Comprehensive dental services for all ages.</p>
      </div>
      <div style={{ textAlign: 'center', maxWidth: '300px' }}>
        <div>🚑</div>
        <h3>Emergency Services</h3>
        <p>24/7 emergency care for urgent needs.</p>
      </div>
    </div>
  </section>
);

const AboutUs = () => (
  <section style={{ padding: '40px 20px' }}>
    <h2>About Us</h2>
    <p>We are committed to providing high-quality healthcare services to our community. Our mission is to improve the health and well-being of our patients through comprehensive care and compassionate service.</p>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={doctorImage} alt="Doctor" style={{ width: '100px', borderRadius: '50%' }} />
        <h3>Dr. John Doe</h3>
        <p>Chief Medical Officer</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={nurseImage} alt="Nurse" style={{ width: '100px', borderRadius: '50%' }} />
        <h3>Nurse Jane Smith</h3>
        <p>Head Nurse</p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section style={{ padding: '40px 20px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
    <h2>What Our Patients Say</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ margin: '10px 0' }}>
        <p>"Excellent care and service. Highly recommend!"</p>
        <h4>- Alice</h4>
      </div>
      <div style={{ margin: '10px 0' }}>
        <p>"Professional and compassionate staff."</p>
        <h4>- Bob</h4>
      </div>
    </div>
  </section>
);

const LatestNews = () => (
  <section style={{ padding: '40px 20px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
    <h2 style={{ animation: 'scroll 10s linear infinite' }}>Latest News</h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ minWidth: '300px', margin: '10px 20px', textAlign: 'center' }}>
        <h3>New Health Guidelines Released</h3>
        <p>Stay updated with the latest health guidelines and practices.</p>
      </div>
      <div style={{ minWidth: '300px', margin: '10px 20px', textAlign: 'center' }}>
        <h3>Our New Facility Opening Soon</h3>
        <p>We are excited to announce the opening of our new facility next month.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#007bff', color: 'white', padding: '20px', textAlign: 'center' }}>
    <div>
      <p>Contact Us: (123) 456-7890 | email@example.com | No 8 Idua Road</p>
      <div style={{ margin: '10px 0' }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px', margin: '0 10px' }}><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px', margin: '0 10px' }}><FaInstagram /></a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px', margin: '0 10px' }}><FaWhatsapp /></a>
      </div>
      <p>All Rights Reserved to Healthcare</p>
    </div>
  </footer>
);

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
        <Testimonials />
        <LatestNews />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

