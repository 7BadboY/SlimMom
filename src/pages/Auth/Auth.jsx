import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
//import AuthNav from '../../components/AuthNav/AuthNav';
//import Login from '../../components/Login/Login';
//import Register from '../../components/Register/Register';
//import PropTypes from 'prop-types';

class Auth extends Component {
  state = {};

  render() {
    return (
      <>
        <div>HEADER</div>
        <Login />
        {/* <Login />
        <Register /> */}
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </>
    );
  }
}
export default Auth;
