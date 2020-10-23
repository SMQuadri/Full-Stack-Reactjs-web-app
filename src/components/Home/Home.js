import React from 'react';

import './Home.css';

import Middle from './Middle Content/Middle';
import Faqs from './Faqs/Faqs';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
  return(
    <div className="home">
      <Header />
      <Middle />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;