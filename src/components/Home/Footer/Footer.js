import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__title">Questions? Call 000-800-040-1843</span>
      <div className="footer__main">
        <div className="footer__part">
          <span className="footer__item">FAQ</span>
          <span className="footer__item">Investor Relations</span>
          <span className="footer__item">Privacy</span>
          <span className="footer__item">Speed Test</span>
        </div>
        <div className="footer__part">
          <span className="footer__item">Help Centre</span>
          <span className="footer__item">Jobs</span>
          <span className="footer__item">Cookie Preferances</span>
          <span className="footer__item">Legal Notice</span>
        </div>
        <div className="footer__part">
          <span className="footer__item">Account</span>
          <span className="footer__item">Ways to Watch</span>
          <span className="footer__item">Corporate Information</span>
          <span className="footer__item">Netflix Originals</span>
        </div>
        <div className="footer__part">
          <span className="footer__item">Media Centre</span>
          <span className="footer__item">Terms of Use</span>
          <span className="footer__item">Contact Us</span>
        </div>
      </div>

      <span className="footer__country">Netflix India</span>
    </div>
  );
}

export default Footer;