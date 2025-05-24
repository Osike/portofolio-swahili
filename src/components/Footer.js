import React from 'react';
import './Footer.css'; // We'll create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Shadrack. All rights reserved.</p>
      <p>Built with React</p>
    </footer>
  );
}

export default Footer;