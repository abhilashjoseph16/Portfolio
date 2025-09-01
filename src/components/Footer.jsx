import React from "react";

function Footer() {
  return (
    <div className="portfolio-footer-main-container">
      <div className="footer-line"></div>
      <p>
        © {new Date().getFullYear()} Abhilash Joseph. All rights reserved. Made
        with 🧡 and lots of coffee.
      </p>
    </div>
  );
}

export default Footer;
