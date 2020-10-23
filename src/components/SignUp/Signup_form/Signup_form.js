import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Signup_form.css';

import { auth } from '../../../firebase';
import Footer from '../../Home/Footer/Footer';
import Logo from '../../Home/Header/logo.svg';

const Signup_form = () => {

  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUpHandler = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) =>
            result.user
            .updateProfile({
              displayName: firstName,
              photoURL: Math.floor(Math.random() * 5) + 1,
          })
    .then((auth) => {
      history.push('/browse');
    })
    )
    .catch((error) => {
      setPassword('');
      setError(error.message);
    });
  };

  return (
    <div className="suForm">
      <div className="suForm__top">
        <Link to="/" style={{textDecoration: "none"}} >
          <img className="suForm__logo" src={Logo} alt="Netflix Logo" />
        </Link>
        <div className="suForm__form1">
          <div className="suForm__form">
            <span className="suForm__title">Sign Up</span>
            {error && <span className="suForm__error">{error}</span>}
            <form>
              <input
                type="text"
                required
                placeholder="Username"
                value={firstName}
                className="suForm__input"
                onChange={event => setFirstName(event.target.value)}
              />
              <input 
                required
                value={email} 
                onChange={event => setEmail(event.target.value)}
                className="suForm__input" 
                type="email" 
                placeholder="Email"  
              />
              <input 
                required
                value={password} 
                onChange={event => setPassword(event.target.value)}
                className="suForm__input" 
                type="password" 
                placeholder="Password" 
              />
              <button
                className="suForm__button" 
                type="submit" 
                onClick={signUpHandler} 
              >Sign Up</button>
            </form>
            <div className="suForm__subtitle">
              <span className="suForm__new">Already registered?</span>
              <Link to="/signin" style={{textDecoration: "none"}} >
                <span className="suForm__signup">Sign In here</span>
              </Link>
            </div>
            <span className="suForm__desc">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="suForm__learn"> Learn More.</span></span>
          </div>
        </div>
      </div>
      
      <div className="suForm__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Signup_form;