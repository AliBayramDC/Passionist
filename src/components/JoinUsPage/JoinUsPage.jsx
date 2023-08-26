import React from 'react';
import './JoinUsPage.css';

const JoinUsPage = () => {
  return (
    <div className="join-us-page-container">
      <div className="join-us-content">
        <h2>Join Us</h2>
        <p>Join our passionate community of furniture enthusiasts and stay updated with the latest trends and offers.</p>
        <form className="join-us-form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <button className="join-button">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUsPage;
