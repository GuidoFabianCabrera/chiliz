import React from 'react';

import '../assets/styles/components/Footer.scss';

import logo from '../assets/static/logo.png';

import {
  FaFacebookF,
  FaTwitter,
  FaMedium,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaWeixin,
  FaWeibo,
  FaDiscord,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <p className="footer__title">FOLLOW THE JOURNEY</p>
          <a className="footer__social_icon" href="/">
            <FaFacebookF />
          </a>
          <a className="footer__social_icon" href="/">
            <FaTwitter />
          </a>
          <a className="footer__social_icon" href="/">
            <FaMedium />
          </a>
          <a className="footer__social_icon" href="/">
            <FaLinkedin />
          </a>
          <a className="footer__social_icon" href="/">
            <FaYoutube />
          </a>
          <a className="footer__social_icon" href="/">
            <FaTelegram />
          </a>
          <a className="footer__social_icon" href="/">
            <FaInstagram />
          </a>
          <a className="footer__social_icon" href="/">
            <FaWeixin />
          </a>
          <a className="footer__social_icon" href="/">
            <FaWeibo />
          </a>
          <a className="footer__social_icon" href="/">
            <FaDiscord />
          </a>
        </div>

        <div className="footer__page">
          <div className="footer__page_column">
            <h6>HEADQUARTERS</h6>
            <p>
              HX Entertainment Ltd. <br />
              14 East, Sliema Road, Gzira <br />
              GZR 1639, Malta <br />
              contact@chiliz.com
            </p>
          </div>
          <div className="footer__page_column">
            <h6>RESOURCES & COMPLIANCE</h6>
            <p>
              Blockchain Campus <br />
              Terms & Conditions
              <br />
              Privacy Policy
              <br />
              Cookies Policy
              <br />
              Insider Trading Policy
            </p>
          </div>
          <div className="footer__page_column">
            <h6>COMPANY</h6>
            <p>
              About Us <br />
              Careers <br />
              Contact Us <br />
            </p>
          </div>
          <div className="footer__page_column">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="footer__copyright">
          <p>
            © Copyright 2018 - 2020. All Rights Reserved. HX Entertainment
            Limited (C 77290) and Mediarex Enterprises Limited (C 73768).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
