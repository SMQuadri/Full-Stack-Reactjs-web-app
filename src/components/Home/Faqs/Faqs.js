import React, { useState } from 'react';

import './Faqs.css';

import Open from './add.png';
import Close from './close-slim.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Faqs = () => {

  const [toggle1, showToggle1] = useState(false);
  const [toggle2, showToggle2] = useState(false);
  const [toggle3, showToggle3] = useState(false);
  const [toggle4, showToggle4] = useState(false);
  const [toggle5, showToggle5] = useState(false);

  return (
    <div className="faqs">
      <span className="faqs__title">Frequently Asked Questions</span>
      <div className="faqs__question" onClick={() => showToggle1((toggle1) => (!toggle1))} >
        <span className="faqs__q">What is netflix?</span>
        {toggle1 ? (
          <img className="faqs__img" src={Close} alt="Close" />
        ):(
          <img className="faqs__img" src={Open} alt="Open" />
        )}
      </div>
      {toggle1 ? (
        <div className="faqs__answer">
          <span className="faqs__a">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /><br />You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</span>
        </div>
      ) : null }

      <div className="faqs__question" onClick={() => showToggle2((toggle2) => (!toggle2))} >
        <span className="faqs__q">How much does Netflix cost?</span>
        {toggle2 ? (
          <img className="faqs__img" src={Close} alt="Close" />
        ):(
          <img className="faqs__img" src={Open} alt="Open" />
        )}
      </div>
      {toggle2 ? (
        <div className="faqs__answer">
          <span className="faqs__a">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</span>
        </div>
      ) : null }

      <div className="faqs__question" onClick={() => showToggle3((toggle3) => (!toggle3))} >
        <span className="faqs__q">Where can I watch?</span>
        {toggle3 ? (
          <img className="faqs__img" src={Close} alt="Close" />
        ):(
          <img className="faqs__img" src={Open} alt="Open" />
        )}
      </div>
      {toggle3 ? (
        <div className="faqs__answer">
          <span className="faqs__a">Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /><br />You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>
        </div>
      ) : null }

      <div className="faqs__question" onClick={() => showToggle4((toggle4) => (!toggle4))} >
        <span className="faqs__q">How do I cancel?</span>
        {toggle4 ? (
          <img className="faqs__img" src={Close} alt="Close" />
        ):(
          <img className="faqs__img" src={Open} alt="Open" />
        )}
      </div>
      {toggle4 ? (
        <div className="faqs__answer">
          <span className="faqs__a">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>
        </div>
      ) : null }

      <div className="faqs__question" onClick={() => showToggle5((toggle5) => (!toggle5))} >
        <span className="faqs__q">What can I watch on Netflix?</span>
        {toggle5 ? (
          <img className="faqs__img" src={Close} alt="Close" />
        ):(
          <img className="faqs__img" src={Open} alt="Open" />
        )}
      </div>
      {toggle5 ? (
        <div className="faqs__answer">
          <span className="faqs__a">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>
        </div>
      ) : null }

      <span className="faqs__bottomTitle">Ready to watch? Enter your email to create or restart your membership.</span>
      <div className="faqs__bottom">
        <input className="faqs__email" type="email" placeholder="Email Address" ></input>
        <div className="faqs__button">
          <span className="faqs__get">GET STARTED</span>
          <ChevronRightIcon />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Faqs;