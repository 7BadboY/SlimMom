import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedComponent = ({ component: Component, active, ...rest }) => {
  const getUserToken = localStorage.getItem('userToken');
  return active ? (
    <Route
      {...rest}
      render={props => (getUserToken ? <Component {...props} token={getUserToken} /> : <Redirect to="/" />)}
    />
  ) : (
    <Route {...rest} render={props => (getUserToken ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
  );
};

ProtectedComponent.propTypes = {
  component: PropTypes.func.isRequired,
  Component: PropTypes.func.isRequired,
  active: PropTypes.func.isRequired
};

export default ProtectedComponent;
