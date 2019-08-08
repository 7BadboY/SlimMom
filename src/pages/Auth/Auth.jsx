import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Landing from '../../components/AuthNav/AuthNav';
//import PropTypes from 'prop-types';

class Auth extends Component {
  state = {};

  render() {
    return (
      <>
        <div>HEADER</div>
        <Landing />
        <Register />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </>
    );
  }
}
export default Auth;
