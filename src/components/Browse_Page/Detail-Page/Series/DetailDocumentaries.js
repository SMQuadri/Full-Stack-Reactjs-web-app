import React from 'react';

import '../DetailPage.css';
import BrowseH_Series from '../../Browse_Header/BrowseH_Series';

import Documentaries from '../../../../netflix-categories/series/documentaries/documentaries.json';
import SingleItem from '../SingleItem/SingleItem';

const DetailDocumentaries = () => {
  return (
    <div className="detailPage">
      <BrowseH_Series />
      <span className="detailPage__category">TV Series - Documentaries</span>
      {
        Documentaries.map((item) => (
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

export default DetailDocumentaries;

{/* <div className="detailPage__left">
                <span className="detailPage__title">{item.title}</span>
                <span className="detailPage__desc">{item.description}</span>
                <span className="detailPage__add">+ My List</span>
              </div> */}