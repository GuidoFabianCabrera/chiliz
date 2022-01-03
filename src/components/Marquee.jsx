import React from 'react';

import '../assets/styles/components/Marquee.scss';

function Marquee({ marquee }) {
  return (
    <section className="marquee__container">
      <p className="marquee__title">OFFICIAL PARTNERS</p>
      <div className="marquee">
        <ul className="marquee__content">
          {marquee.map((item) => (
            <li className="marquee__item" key={item.id}>
              <img src={item.image} alt={item.id} />
            </li>
          ))}

          {/* <li className="marquee__item">1</li>
      <li className="marquee__item">2</li>
      <li className="marquee__item">3</li>
      <li className="marquee__item">4</li>
      <li className="marquee__item">5</li>
      <li className="marquee__item">6</li>
      <li className="marquee__item">7</li>
      <li className="marquee__item">8</li>
      <li className="marquee__item">9</li>
      
      <li className="marquee__item">1</li>
      <li className="marquee__item">2</li>
      <li className="marquee__item">3</li>
    <li className="marquee__item">4</li> */}
        </ul>
      </div>
    </section>
  );
}

export default Marquee;
