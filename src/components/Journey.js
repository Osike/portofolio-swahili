import React from 'react';
import './Journey.css'; // We'll create this CSS file

function Journey() {
  return (
    <section id="journey" className="journey-section">
      <h2>My Journey</h2>

      <div className="journey-item">
        <h3>Education</h3>
        <p><strong>University of Mombasa</strong></p>
        <p>Bachelors in Information Technology (I.T)</p>
        <p><em>Dates attended (e.g., 2018 - 2022) - You'll fill this in</em></p>
      </div>

      <div className="journey-item">
        <h3>Certifications</h3>
        <ul>
          <li>Cisco Certified Network Associate (CCNA)</li>
          <li>Cybersecurity Foundations (e.g., CompTIA Security+, Certified Ethical Hacker) - *Specify if you have exact certs*</li>
          <li>Python Programming (e.g., Python Institute PCAP/PCEP) - *Specify if you have exact certs*</li>
        </ul>
      </div>

      {/* You can add more sections like work experience or skills here */}
    </section>
  );
}

export default Journey;

