import React from 'react';

const sectionStyle = {
  padding: '40px 20px',
  maxWidth: '800px',
  margin: '0 auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  resize: 'vertical',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  alignSelf: 'center',
  marginTop: '10px',
};

const contactInfoStyle = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#555',
};

const ContactUs = () => (
  <section style={sectionStyle}>
    <h2>Contact Us</h2>
    <p>We value your feedback and are here to assist you. Please fill out the form below, and our team will respond to your inquiry as soon as possible.</p>
    <form style={formStyle}>
      <input type="text" name="name" placeholder="Your Full Name" required style={inputStyle} />
      <input type="email" name="email" placeholder="Your Email Address" required style={inputStyle} />
      <input type="tel" name="phone" placeholder="Your Phone Number" required style={inputStyle} />
      <textarea name="message" rows="5" placeholder="Your Message" required style={textareaStyle}></textarea>
      <button type="submit" style={buttonStyle}>Send Message</button>
    </form>
    <div style={contactInfoStyle}>
      <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: No 8 Idua Road, Lagos, Nigeria</p>
    </div>
  </section>
);

export default ContactUs;
