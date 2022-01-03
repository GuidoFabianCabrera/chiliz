import React from 'react';

import phone from '../assets/static/phone.png';
import certik from '../assets/static/certik.png';

import '../assets/styles/components/Main.scss';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__image">
          <img className="main__phone" src={phone} alt="Phone" />
          <img className="main__certik" src={certik} alt="Certik" />
        </div>

        <div className="main__text">
          <h1 className="main__title">
            The world’s leading blockchain fintech provider for sports &
            entertainment
          </h1>

          <p className="main__description">
            Chiliz developed the Socios.com sports fan engagement platform which
            is built on the Chiliz blockchain infrastructure & uses $CHZ as it’s
            exclusive on-platform currency.
          </p>

          <a className="main__button" href="/">
            GO TO CHILIZ EXCHANGE
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
