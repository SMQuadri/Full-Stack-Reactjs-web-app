import React from 'react';

import './Signup.css';

import Signup_form from './Signup_form/Signup_form';
import Footer from '../Home/Footer/Footer';

const Signup = () => {
  return (
    <div className="signup">
      <Signup_form />
    </div>
  );
}

export default Signup;