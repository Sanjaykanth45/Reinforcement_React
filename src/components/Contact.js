import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      
      <section className="contact-content">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Please fill out the form below or reach us at
           <a href="mailto:sanjaykanth45@gmail.com">sanjaykanth45@gmail.com</a>.</p>
        
        <form className="contact-form">
          <label For="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label For="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label For="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
