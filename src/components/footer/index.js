import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      © {year} Ravi Chaudhary
    </footer>
  );
};

export default Footer;
