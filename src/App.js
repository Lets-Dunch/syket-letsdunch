import React, { Fragment } from 'react';
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import VerifyEmail from './components/verify-email/VerifyEmail';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <Fragment>
      <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route  path="/registration">
            <Registration />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/verify-email">
            <VerifyEmail />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
