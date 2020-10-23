import React from 'react';

import '../DetailPage.css';
import BrowseH_Movies from '../../Browse_Header/BrowseH_Movies';

import Children from '../../../../netflix-categories/movies/children/children.json';
import SingleItem from '../SingleItem/SingleItem';

const DetailChildren2 = () => {
  return (
    <div className="detailPage">
      <BrowseH_Movies />
      <span className="detailPage__category">Movies - Children</span>
      {
        Children.map((item) => (
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

export default DetailChildren2;