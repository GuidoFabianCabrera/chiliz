import React from 'react';

import '../assets/styles/HomePage.css';

import Header from '../components/Header';
import Main from '../components/Main';
import Marquee from '../components/Marquee';
import WhatsIs from '../components/WhatsIs';
import Partners from '../components/Partners';
import PressCoverage from '../components/PressCoverage';
import Footer from '../components/Footer';

import marquee1 from '../assets/static/test/mi-11.png';
import marquee2 from '../assets/static/test/juv-w.png';
import marquee3 from '../assets/static/test/mi-9.png';
import marquee4 from '../assets/static/test/mi-8.png';
import marquee5 from '../assets/static/test/mi-7.png';
import marquee6 from '../assets/static/test/mi-6.png';
import marquee7 from '../assets/static/test/cai-w2.png';
import marquee8 from '../assets/static/test/mi-4.png';
import marquee9 from '../assets/static/test/th-w.png';
import marquee10 from '../assets/static/test/ufc-w.png';
import marquee11 from '../assets/static/test/mi-2.png';
import marquee12 from '../assets/static/test/mi-1.png';
import marquee13 from '../assets/static/test/YB_90.png';
import marquee14 from '../assets/static/test/svvt-w.png';
import marquee15 from '../assets/static/test/pfl-w.png';
import marquee16 from '../assets/static/test/Novara90.png';
import marquee17 from '../assets/static/test/navi-90.png';
import marquee18 from '../assets/static/test/90IFBK.png';
import marquee19 from '../assets/static/test/ALL-Plain-Logo.png';
import marquee20 from '../assets/static/test/uch-w.png';
import marquee21 from '../assets/static/test/acm.png';
import marquee22 from '../assets/static/test/legia90.png';
import marquee23 from '../assets/static/test/fortuna90.png';
import marquee24 from '../assets/static/test/mc-90.png';

const marqueeIcons = [
  { id: 1, image: marquee1 },
  { id: 2, image: marquee2 },
  { id: 3, image: marquee3 },
  { id: 4, image: marquee4 },
  { id: 5, image: marquee5 },
  { id: 6, image: marquee6 },
  { id: 7, image: marquee7 },
  { id: 8, image: marquee8 },
  { id: 9, image: marquee9 },
  { id: 10, image: marquee10 },
  { id: 11, image: marquee11 },
  { id: 12, image: marquee12 },
  { id: 13, image: marquee13 },
  { id: 14, image: marquee14 },
  { id: 15, image: marquee15 },
  { id: 16, image: marquee16 },
  { id: 17, image: marquee17 },
  { id: 18, image: marquee18 },
  { id: 19, image: marquee19 },
  { id: 20, image: marquee20 },
  { id: 21, image: marquee21 },
  { id: 22, image: marquee22 },
  { id: 23, image: marquee23 },
  { id: 24, image: marquee24 },
  { id: 25, image: marquee1 },
  { id: 26, image: marquee2 },
  { id: 27, image: marquee3 },
  { id: 28, image: marquee4 },
  { id: 29, image: marquee5 },
  { id: 30, image: marquee6 },
  { id: 31, image: marquee7 },
];

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Main />
      <Marquee marquee={marqueeIcons} />
      <WhatsIs />
      <Partners />
      <PressCoverage />
      <Footer />
    </div>
  );
}

export default HomePage;
