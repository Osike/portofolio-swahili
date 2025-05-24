import React from 'react';
import './Contact.css'; // We'll create this CSS file

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch!</h2>
      <p>I'm always open to new opportunities and collaborations.</p>
      <p>Feel free to reach out to me:</p>
      <p className="contact-email">Email: <a href="mailto:code.tribe@yahoo.com">code.tribe@yahoo.com</a></p>
      {/* You can add links to your LinkedIn, GitHub, etc. here */}
      <div className="social-links">
        {/* Example: */}
        {/* <a href="YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
        {/* <a href="YOUR_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer">GitHub</a> */}
      </div>
    </section>
  );
}

export default Contact;

