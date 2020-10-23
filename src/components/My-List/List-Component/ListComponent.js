import React from 'react';

import './ListComponent.css';

import { useStateValue } from '../../../StateProvider/StateProvider';

const ListComponent = ({ id, image1, image2, desc, title, category }) => {

  const [{ myList }, dispatch] = useStateValue();

  const removeFromMyList = () => {
    dispatch({
      type: "REMOVE_FROM_MYLIST",
      id: id,
    });
  }

  return(
    <div className="listComponent">
      <div className="listComponent__category">
        <span className="listComponent__category1">Category - {category}</span>
      </div>
      <img className="listComponent__image" src={image1} alt="" />
      <div className="listComponent__bottom">
        <span className="listComponent__title">{title}</span>
        <span className="listComponent__desc">{desc}</span>
        <span className="listComponent__remove" onClick={removeFromMyList} >Remove From My List</span>
      </div>
    </div>
  );
}

export default ListComponent;