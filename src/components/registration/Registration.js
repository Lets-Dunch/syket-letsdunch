import React, { useEffect, useState } from 'react';
import './Registration.css';
import banner from '../../img/banner.jpg';
import logo from '../../img/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoodIcon from '@material-ui/icons/Mood';
import { Link } from 'react-router-dom';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useForm } from 'react-hook-form';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="registration">
      <div className="row">
        <div className="col-md-6">
          <img className="leftImage" src={banner} alt="" />
        </div>
        <div className="col-md-6 my-5">
          <div className="right-side">
          <img className="body-logo" src={logo} alt="" />
          <h3 className="registration--heading-tertiary">
            Join our community!
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
                <label htmlFor="first-name">
                  <p>First Name</p>
                  <p>
                    {!firstName || firstName.length <= 2 ? (
                      <span className="bad">
                        {' '}
                        Please enter your first name with 3 characters{' '}
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
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="registration__input"
                  id="first-name"
                  ref={register({ required: true, minLength: 3 })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">
                  <p>Last Name</p>
                  <p>
                    {!lastName || lastName.length <= 2 ? (
                      <span className="bad">
                        {' '}
                        Please enter your last name with 3 characters{' '}
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
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="registration__input"
                  id="last-name"
                  ref={register({ required: true, minLength: 3 })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <p>Email</p>
                  <p>
                    {!email ? (
                      <span className="bad">
                        {' '}
                        Please enter your email <MoodBadIcon className="bad" />
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
                    {!password || password.length <= 5 ? (
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
                  ref={register({ required: true, minLength: 6 })}
                />
              </div>

              <div className="registration__submit--button--container">
                <span>
                  Already Have an account? <Link to="/login">Login</Link>
                </span>

                <button className="btn submit--button">
                  Join our community
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
