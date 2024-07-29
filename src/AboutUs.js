import React from 'react';

// Import images
import hospitalImage from './images/ho.jpeg'; // Replace with your image file
import doctorImage from './images/do.jpeg'; // Replace with your image file
import nurseImage from './images/no5.jpeg'; // Replace with your image file

// About Us Styles
const aboutUsStyle = {
  padding: '40px 20px',
  backgroundColor: '#f0f0f0',
  textAlign: 'center'
};

const aboutImageStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
};

const teamSpotlightStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
};

const teamMemberStyle = {
  textAlign: 'center',
  maxWidth: '250px',
};

const teamImageStyle = {
  width: '100px',
  borderRadius: '50%',
};

// About Us Component
const AboutUs = () => (
  <section style={aboutUsStyle}>
    <h2>About Us</h2>
    <img src={hospitalImage} alt="BrightCare Hospital" style={aboutImageStyle} />
    <p>
      Welcome to BrightCare Hospital, a leading healthcare facility located in Lagos, Nigeria. Our mission is to deliver high-quality healthcare services with compassion and professionalism. 
      We are committed to improving the health and well-being of our patients through a comprehensive range of medical services and personalized care.
    </p>
    <h3>Our Mission</h3>
    <p>
      At BrightCare Hospital, our mission is to provide top-notch healthcare services that are accessible to everyone in the community. We aim to deliver care with the highest standards of excellence, 
      focusing on patient-centered practices and continuous improvement.
    </p>
    <h3>Meet Our Team</h3>
    <div style={teamSpotlightStyle}>
      <div style={teamMemberStyle}>
        <img src={doctorImage} alt="Dr. Samuel Okoro" style={teamImageStyle} />
        <h4>Dr. Samuel Okoro</h4>
        <p>Chief Medical Officer</p>
      </div>
      <div style={teamMemberStyle}>
        <img src={nurseImage} alt="Nurse Grace Adeyemi" style={teamImageStyle} />
        <h4>Nurse Grace Adeyemi</h4>
        <p>Head Nurse</p>
      </div>
    </div>
  </section>
);

export default AboutUs;
