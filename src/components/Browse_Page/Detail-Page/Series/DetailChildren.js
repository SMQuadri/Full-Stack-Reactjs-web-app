import React from 'react';

import '../DetailPage.css';
import BrowseH_Series from '../../Browse_Header/BrowseH_Series';

import Children from '../../../../netflix-categories/series/children/children.json';
import { useStateValue } from '../../../../StateProvider/StateProvider';
import SingleItem from '../SingleItem/SingleItem';

const DetailChildren = () => {

  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="detailPage">
      <BrowseH_Series />
      <span className="detailPage__category">TV Series - Children</span>
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

export default DetailChildren;