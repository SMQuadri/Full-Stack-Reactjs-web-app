import React from 'react';

import './Signin.css';

import Signin_form from './Signin_form/Signin_form';
import Footer from '../Home/Footer/Footer';

const Signin = () => {
  return (
    <div className="signin">
      <Signin_form />
    </div>
  );
}

export default Signin;