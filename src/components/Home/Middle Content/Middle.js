import React from 'react';

import './Middle.css';

import Image1 from './home-tv.jpg';
import Image2 from './home-mobile.jpg';
import Image3 from './home-imac.jpg';

const Middle = () => {
  return(
    <div className="middle">
      <div className="middle__part1">
        <div className="middle__part">
          <div className="middle__left">
            <span className="middle__title">Enjoy on your TV.</span>
            <span className="middle__desc">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
          </div>
          <div className="middle__right">
            <img className="middle__img" src={Image1} alt="" />
          </div>
        </div>
      </div>

      <div className="middle__part1">
        <div className="middle__part middle__reverse">
          <div className="middle__right">
            <img className="middle__img" src={Image2} alt="" style={{marginBottom: "50px"}} />
          </div>
          <div className="middle__left">
            <span className="middle__title">Download your shows to watch offline.</span>
            <span className="middle__desc">Save your favourites easily and always have something to watch.</span>
          </div>
        </div>
      </div>
      
      <div className="middle__part1">
        <div className="middle__part">
          <div className="middle__left">
            <span className="middle__title">Watch everywhere.</span>
            <span className="middle__desc">Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</span>
          </div>
          <div className="middle__right">
            <img className="middle__img" src={Image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;