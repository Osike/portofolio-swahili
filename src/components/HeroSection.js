import React from 'react';
import './HeroSection.css'; // We'll create this CSS file

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Shadrack!</h1>
        <p>A passionate IT enthusiast from the code_tribe clan, dedicated to building innovative solutions.</p>
        {/* You can add more text or an image here */}
      </div>
    </section>
  );
}

export default HeroSection;
