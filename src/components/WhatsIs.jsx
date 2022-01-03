import React from 'react';

import '../assets/styles/components/WhatsIs.scss';

import coin from '../assets/static/coin.png';

function WhatsIs() {
  return (
    <section className="whats-is">
      <div className="whats-is__container">
        <img className="whats-is__image" src={coin} alt="coin" />
        <div className="whats-is__text">
          <h2 className="whats-is__title">What is Chiliz?</h2>
          <p className="whats-is__description">
            Chiliz is a currency option for blockchain-backed products &
            services geared towards mainstream consumers. We want to elevate
            everyday experiences – fan engagement in entertainment, alternative
            payment solutions for conventional products, and more.
          </p>
          <p className="whats-is__description">
            Chiliz provides sports & entertainment entities with
            blockchain-based tools to help them engage & monetize their
            audiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatsIs;
