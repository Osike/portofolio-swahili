import React from 'react';
import './Header.css'; // We'll create this CSS file

function Header() {
  const handleDownloadCV = () => {
    // For now, this will alert. Later, you'll link to your actual CV file.
    alert('Downloading CV... (Implement actual download logic here)');
    // You'll typically have a link to your CV like:
    // window.open('/path/to/your/cv.pdf', '_blank');
  };

  return (
    <header className="header">
      <div className="header-info">
        <span>code_tribe clan</span>
        <span> clan</span>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={handleDownloadCV} className="download-cv-btn">Download CV</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
