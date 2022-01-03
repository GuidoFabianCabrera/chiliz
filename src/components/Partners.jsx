import React from 'react';

import '../assets/styles/components/Partners.scss';

function Partners() {
  return (
    <section className="partners">
      <div className="partners__container">
        <h2 className="partners__title">
          $CHZ – The Rocket Fuel for Socios.com
        </h2>
        <p className="partners__description">
          The Socios.com fan engagement platform is built from the ground up on
          the Chiliz blockchain infrastructure & uses $CHZ as it’s exclusive
          on-platform currency. Socios.com allows fans to purchase branded Fan
          Tokens from some of the biggest and most renowned sports teams in the
          world including FC Barcelona, Juventus, Paris Saint-Germain, AS Roma,
          Galatasaray, Atlético de Madrid, OG, CAI & UFC.
        </p>
        <p className="partners__description">
          Fan Tokens bought on Socios.com allow users to influence their teams
          via popular vote and become eligible for engagement-based team rewards
          and recognition. All Fan Tokens are minted using the Chiliz blockchain
          & all on-platform voting is executed as a series of smart contracts
          which run through the Chiliz blockchain.
        </p>
        <a className="partners__button" href="/">
          DISCOVER SOCIOS
        </a>
      </div>
    </section>
  );
}

export default Partners;
