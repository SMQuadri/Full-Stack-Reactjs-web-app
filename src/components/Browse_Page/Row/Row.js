import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import './Row.css';
import InfoIcon from '@material-ui/icons/Info';

const Row = ({ content }) => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="row">
      <Carousel breakPoints={breakPoints}>
      {
        content.map((item) => (
          <div className="row__full">
            <div className="row__block">
              <img className="row__img" src={item.img1} key={item.id}/>    
              <div className="row__overlay">
                <Link className="row__link" style={{textDecoration: "none"}} to={`/browse/${item.category}/${item.genre}`}>
                <span className="row__more">More Info</span>
                <InfoIcon className="row__info" />
                </Link>
              </div>
            </div>
          </div>
        ))
      }
      </Carousel>
      
    </div>
  );
}

export default Row;