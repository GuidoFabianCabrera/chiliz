import React, { useState } from 'react';

import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo.png';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__null"></div>

        <img className="header__logo" src={logo} alt="Logo" />

        <div className="header__menu_icon" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={open ? 'header__menu--open' : 'header__menu--close'}>
          <ul>
            <li className="header__menu_item--section">
              <a href="/">Chiliz Exchange</a>
            </li>
            <li className="header__menu_item--section">
              <a href="/">Blockchain Explorer</a>
            </li>
            <li className="header__menu_item--section">
              <a href="/">Entertainment</a>
            </li>
            <li className="header__menu_item--section">
              <a href="/">$CHZ</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Token Details</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Buying & Holding $CHZ</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Chilizen Projects</a>
            </li>
            <li className="header__menu_item--section">
              <a href="/">News</a>
            </li>
            <li className="header__menu_item--section">
              <a href="/">Company</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Our Story</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Team</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Careers</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">FAQ</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Press</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">Contact</a>
            </li>
            <li className="header__menu_item--section">
              <a href="/">EN</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">EN</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">한국어</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">中文 (中国)</a>
            </li>
            <li className="header__menu_item--subsection">
              <a href="/">日本語</a>
            </li>
          </ul>
        </div>

        {/* ---------------------------------------------------------- */}

        <div className="header__menu--desktop">
          <div className="header__menu_item--desktop">
            <a className="link link--metis" href="/">
              CHILIZ EXCHANGE
            </a>
          </div>
          <div className="header__menu_item--desktop">
            <a className="link link--metis" href="/">
              BLOCKCHAIN EXPLORER
            </a>
          </div>
          <div className="header__menu_item--desktop">
            <a className="link link--metis" href="/">
              ENTERTAINMENT
            </a>
          </div>
          <div className="header__menu_item--desktop">
            <a className="link link--metis" href="/">
              $CHZ
            </a>
            <div className="header__menu_hover--desktop">
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  TOKEN DETAILS
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  BUYING & HOLDING $CHZ
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  CHILIZEN PROJECTS
                </a>
              </div>
            </div>
          </div>
          <div className="header__menu_item--desktop">
            <a className="link link--metis" href="/">
              NEWS
            </a>
          </div>
          <div className="header__menu_item--desktop">
            <a className="link link--metis" href="/">
              COMPANY
            </a>
            <div className="header__menu_hover--desktop">
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  OUR STORY
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  TEAM
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  CAREERS
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  FAQ
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  PRESS
                </a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a className="link link--metis" href="/">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
          <div className="header__menu_item--desktop">
            <a className="" href="/">
              EN
            </a>
            <div className="header__menu_hover--desktop">
              <div className="header__menu_subitem--desktop">
                <a href="/">EN</a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a href="/">한국어</a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a href="/">中文 (中国)</a>
              </div>
              <div className="header__menu_subitem--desktop">
                <a href="/">日本語</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
