import React, { useState } from 'react';
import './VerifyEmail.css';
import banner from '../../img/banner.jpg';
import logo from '../../img/logo.png';
import ReactCodeInput from 'react-verification-code-input';

const VerifyEmail = () => {

    const [verifyCode, setVerifyCode] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(verifyCode);
        
    }
    

  return (
    <div className="verify-email">
      <div className="row">
        <div className="col-md-6">
          <img className="leftImage" src={banner} alt="" />
        </div>
        <div className="col-md-6 my-5">
          <div className="right-side">
          <img className="body-logo" src={logo} alt="" />
          <h3 className="verify-heading">
              Just one more step <br/>
              Let's verify your email!
          </h3>
          <p className="verify-text">
              We have already sent a code to your email gh****@gmail.com. Please check your inbox and insert the code in form below to verify your email
          </p>
          <form onSubmit={e => handleSubmit(e)} className="verify-form">
          <div className="verify-box">
              <ReactCodeInput onChange={e => setVerifyCode(e)} />
          </div>
          <button type="submit" className="verify-button submit--button">
              Continue
          </button>
          </form>
          <p className="verify-conclusion">
              Don't worry its one time. Once your email is verified you don't need to this anymore
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
