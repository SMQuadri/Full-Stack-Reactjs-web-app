import React from 'react';
import { useHistory } from 'react-router-dom';

import './Profile.css';

import UserProfile from '../Browse_Page/Browse_Header/user.png';
import { useStateValue } from '../../StateProvider/StateProvider';
import { auth } from '../../firebase';

const Profile = () => {

  let history = useHistory();

  const [{ myList, user }, dispatch] = useStateValue();

  const redirectToHome = () => {
    history.push('./');
  }

  const logOut = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="profile">
      <span className="profile__title">Who's watching <span className="profile__netflix">Netflix</span> ?</span>
      <img className="profile__img" src={UserProfile} alt="User" />
      <span className="profile__name">{user?.displayName}</span>
      <span className="profile__email">{user?.email}</span>
      <span className="profile__logout" onClick={() => {
        logOut();
        redirectToHome();
      }}>Log Out</span>
    </div>
  );
}

export default Profile;