import React from 'react';

import './SingleItem.css';

import { useStateValue } from '../../../../StateProvider/StateProvider';

const SingleItem = ({ id, title, image1, image2, category, desc }) => {

  const [{ myList }, dispatch] = useStateValue();

  const addToMyList = () => {
    dispatch({
      type: 'ADD_TO_MYLIST',
      item: {
        id: id,
        image1: image1,
        image2: image2,
        title: title,
        desc: desc,
        category: category
      },
    })
  };

  return(
    <div className="singleItem">
      <div className="singleItem__left">
        <span className="singleItem__title">{title}</span>
        <span className="singleItem__desc">{desc}</span>
        <span className="singleItem__add" onClick={addToMyList} >+ My List</span>
      </div>
    </div>
  );
}

export default SingleItem;