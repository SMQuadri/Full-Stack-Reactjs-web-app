import React from 'react';

import '../DetailPage.css';
import BrowseH_Series from '../../Browse_Header/BrowseH_Series';

import Crime from '../../../../netflix-categories/series/crime/crime.json';
import SingleItem from '../SingleItem/SingleItem';

const DetailCrime = () => {
  return (
    <div className="detailPage">
      <BrowseH_Series />
      <span className="detailPage__category">TV Series - Crime</span>
      {
        Crime.map((item) => (
          <div className="detailPage__main">
            <div 
              className="detailPage__block" 
              style={{backgroundImage: `URL(${item.img2})`, 
                      backgroundSize: "contain", 
                      backgroundRepeat: "no-repeat"}}
              key={item.id}
            >
              <SingleItem
                id={item.id}
                image1={item.img1}
                image2={item.img2}
                desc={item.description}
                title={item.title}
                category={item.category}
              />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default DetailCrime;