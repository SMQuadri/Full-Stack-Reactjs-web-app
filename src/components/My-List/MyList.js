import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './MyList.css';

import Logo from '../Home/Header/logo.svg';
import { useStateValue } from '../../StateProvider/StateProvider';
import ListComponent from './List-Component/ListComponent';
import { ArrowDropDown } from '@material-ui/icons';
import Profile from '../Profile/Profile';
import UserProfile from '../Browse_Page/Browse_Header/user.png';

const MyList = () => {

  const [{ myList, user }] = useStateValue();

  const [show, handleShow] = useState(false);
  const [myprofile, showProfile] = useState(false);

  const showProfileHandler = () => showProfile(!myprofile);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        handleShow(true);
      } else {
        handleShow(false);
      };
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className="myList">
       <div className={`browseH__navbar ${show && "browseH__Y"}`}>
        <div className="browseH__navbarLeft">
          <Link to="/" style={{textDecoration: "none"}} >
            <img className="browseH__logo" src={Logo} alt="Netflix Logo" />
          </Link>
          <NavLink activeClassName="browseH__active" to="/" style={{textDecoration: "none"}} >
            <span className="browseH__link browseH__link2">Home</span>
          </NavLink>
          <NavLink activeClassName="browseH__active" to="/browse/series" style={{textDecoration: "none"}} >
            <span className="browseH__link">Series</span>
          </NavLink>
          <NavLink activeClassName="browseH__active" to="/browse/movies" style={{textDecoration: "none"}} >
            <span className="browseH__link">Movies</span>
          </NavLink>
          <NavLink activeClassName="browseH__active" to="/browse/mylist" style={{textDecoration: "none"}} >
            <span className="browseH__mylist">My List ({myList?.length})</span>
          </NavLink>
        </div>
        <div className="browseH__navbarRight">
          <div className="browseH__profileDiv" onClick={showProfileHandler} >
            <img className="browseH__profile" src={UserProfile} alt="Profile" />
            <ArrowDropDown className="browseH__arrow" />
          </div>
          {
            myprofile ? (
              <div className="browseH__p">
                <Profile className="browseH__pc" />
              </div>
            ) : null
          }
        </div>
      </div>

      {myList?.length === 0 ? (
          <div className="myList__empty">
            <span className="myList__empty1">Your List is Empty</span>
            <span className="myList__empty2">You have no Movies/Series in your list. To add one or more of those, click <strong>'+ My List'</strong> next to it.</span>
          </div>
        ) : (
          <div className="myList__notEmpty">
            <span>Your List</span>
            <div className="myList__item">
              {myList?.map(item => (
                <ListComponent
                  id={item.id}
                  image1={item.image1}
                  image2={item.image2}
                  title={item.title}
                  desc={item.desc}
                  category={item.category}
                />
              ))}
            </div>
          </div> 
        )}
        .
    </div>
  );
}

export default MyList;