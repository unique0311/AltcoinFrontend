import React from "react";
import '../CSS/component.css';

import cancelImage from '../assets/landing/cancel.svg';

const SignUp = ({ setIsOpen }) => {
  return (
    <>
      <div className="modal_background" onClick={() => setIsOpen(false)}/>
      <div className="signUp_container">
        <div className="signUpContainer_main">
          <img src={cancelImage} onClick={() => setIsOpen(false)}/>
          <div className="signUp_main">
            <h4>Secure Login</h4>
            <h5>Seamless Login Via Web3 Using Your Wallet</h5>
            <button className="loginWallet_button">Login Via Wallet</button>
            <div className="orLogin_via">
              <div />
              <p>OR LOGIN VIA</p>
              <div />
            </div>
            <button className="loginBlank_button">Login Via Wallet</button>
            <button className="loginEmail_button">Login Via Email</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;