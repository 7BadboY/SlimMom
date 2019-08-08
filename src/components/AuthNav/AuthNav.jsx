import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './AuthNav.module.css';

class Landing extends Component {
  render() {
    return (
      <ul className={classes.authnav}>
        <li className={classes.authnavItem}>
          <NavLink to="/auth/login" className={classes.authnavLink}>
            Вход
          </NavLink>
        </li>
        <li className={classes.authnavItem}>
          <NavLink to="/auth/register" className={classes.authnavLink}>
            Регистрация
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default Landing;
