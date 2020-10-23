import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Signin_form.css';

import { auth } from '../../../firebase';
import Footer from '../../Home/Footer/Footer';
import Logo from '../../Home/Header/logo.svg';

const Signin_form = () => {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInHandler = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/browse');
      })
      .catch(error => {
        setPassword('');
        // alert(error.message);
        setError(error.message);
      });
  }

  return (
    <div className="siForm">
      <div className="siForm__top">
        <Link to="/" style={{textDecoration: "none"}} >
          <img className="siForm__logo" src={Logo} alt="Netflix Logo" />
        </Link>
        <div className="siForm__form1">
          <div className="siForm__form">
            <span className="siForm__title">Sign In</span>
            {error && <span className="siForm__error">{error}</span>}
            <form>
              <input 
                required
                value={email} 
                onChange={event => setEmail(event.target.value)}
                className="siForm__input" 
                type="email" 
                placeholder="Email"  
              />
              <input 
                required
                value={password} 
                onChange={event => setPassword(event.target.value)}
                className="siForm__input" 
                type="password" 
                placeholder="Password" 
              />
              <button
                className="siForm__button" 
                type="submit" 
                onClick={signInHandler} 
              >Sign In</button>
            </form>
            <div className="siForm__subtitle">
              <span className="siForm__new">New to Netflix?</span>
              <Link to="/signup" style={{textDecoration: "none"}} >
                <span className="siForm__signup">Sign Up now</span>
              </Link>
            </div>
            <span className="siForm__desc">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="siForm__learn"> Learn More.</span></span>
          </div>
        </div>
      </div>
      
      <div className="siForm__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Signin_form;