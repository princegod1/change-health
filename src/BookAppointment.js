import React from 'react';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '500px',
  margin: '0 auto',
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
};

const infoStyle = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#555',
  textAlign: 'center',
};

const BookAppointment = () => (
  <section style={{ padding: '40px 20px' }}>
    <h2>Book an Appointment</h2>
    <p>Fill out the form below to schedule an appointment with one of our healthcare professionals. Our team will get back to you to confirm your appointment.</p>
    <form style={formStyle}>
      <input type="text" name="name" placeholder="Your Full Name" required style={inputStyle} />
      <input type="email" name="email" placeholder="Your Email Address" required style={inputStyle} />
      <input type="tel" name="phone" placeholder="Your Phone Number" required style={inputStyle} />
      <input type="date" name="date" placeholder="Preferred Appointment Date" required style={inputStyle} />
      <textarea name="message" rows="4" placeholder="Additional Information (Optional)" style={textareaStyle}></textarea>
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
    <div style={infoStyle}>
      <p>After submitting the form, please wait for a confirmation email or phone call from our team. If you have any urgent queries, feel free to contact us directly.</p>
    </div>
  </section>
);

export default BookAppointment;
