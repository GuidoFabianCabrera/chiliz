import React from 'react';

import '../assets/styles/components/PressCoverage.scss';

import pressCoverage from '../assets/static/pressCoverage.png';

function PressCoverage() {
  return (
    <section className="press_coverage">
      <div className="press_coverage__container">
        <div className="press_coverage__text">
          <h2 className="press_coverage__title">Press Coverage</h2>

          <p className="press_coverage__description">
            Here are the latest highlights from around the world…
          </p>

          <a href="/" className="press_coverage__button">
            COVERAGE BOOK
          </a>
        </div>

        <div>
          <img
            className="press_coverage__image"
            src={pressCoverage}
            alt="pressCoverage"
          />
        </div>
      </div>
    </section>
  );
}

export default PressCoverage;
