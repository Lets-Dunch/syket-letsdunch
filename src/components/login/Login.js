import React, { useState } from 'react';
import './Login.css';
import banner from '../../img/banner.jpg';
import logo from '../../img/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoodIcon from '@material-ui/icons/Mood';
import { Link } from 'react-router-dom';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login registration">
      <div className="row">
        <div className="col-md-6">
          <img className="leftImage" src={banner} alt="" />
        </div>
        <div className="col-md-6 my-5">
          <div className="right-side">
            <img className="body-logo" src={logo} alt="" />
            <h3 className="registration--heading-tertiary">
              Login to you r account
            </h3>
            <div className="registration__button">
              <button className="btn registration__button--facebook">
                <FacebookIcon className="facebook__icon" />
                join via facebook
              </button>
            </div>
            <div className="registration__form--container">
              <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="registration__form"
              >
                <div className="form-group">
                  <label htmlFor="email">
                    <p>Email</p>
                    <p>
                      {!email ? (
                        <span className="bad">
                          {' '}
                          Please enter your email{' '}
                          <MoodBadIcon className="bad" />
                        </span>
                      ) : (
                        <span>
                          <MoodIcon className="good" />
                        </span>
                      )}
                    </p>
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="registration__input"
                    id="email"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <p>Password</p>
                    <p>
                      {!password ? (
                        <span className="bad">
                          {' '}
                          Please enter your password with 6 characters{' '}
                          <MoodBadIcon className="bad" />
                        </span>
                      ) : (
                        <span>
                          <MoodIcon className="good" />
                        </span>
                      )}
                    </p>
                  </label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="registration__input"
                    id="password"
                    ref={register({ required: true })}
                  />
                </div>

                <div className="registration__submit--button--container">
                  <span>
                    Don't Have an account? <Link to="/login">Register</Link>
                  </span>

                  <button className="btn login-button submit--button">
                    Login
                  </button>
                </div>
                <p className="terms">
                  By joining you agree to the <Link to="/terms">Terms</Link> and{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>{' '}
                </p>
                <button className="business-user">
                  Business user, click here to register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
