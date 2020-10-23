import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Browse_Header.css';
import Logo from '../../Home/Header/logo.svg';
import Background from './thePunisher2.jpg';
import UserProfile from './user.png';
import { useStateValue } from '../../../StateProvider/StateProvider';
import { ArrowDropDown } from '@material-ui/icons';
import Profile from '../../Profile/Profile';

const BrowseH_Series = () => {

  const [{ myList, user }, dispatch] = useStateValue();

  const [show, handleShow] = useState(false);
  const [myprofile, showProfile] = useState(false);

  const showProfileHandler = () => showProfile(!myprofile);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

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

  return(
    <div className="browseH" style={{backgroundImage: `URL(${Background})`}} >
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
            <span className="browseH__mylist">My List <small>({myList?.length})</small></span>
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

      <div className="browseH__content">
        <span className="browseH__title">Watch The Punisher Now</span>
        <span className="browseH__desc">A former Marine out to punish the criminals responsible for his family's murder finds himself ensnared in a military conspiracy. He then becomes a vigilante with a uniquely brutal brand of justice.</span>
        <div className="browseH__button">
          <span className="browseH__play">Watch Now</span>
          <span className="browseH__add" onClick={handleScroll} >Check out More</span>
        </div>
      </div>
    </div>
  );
}

export default BrowseH_Series;