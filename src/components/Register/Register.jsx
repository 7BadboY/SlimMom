import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import classes from './Register.module.css';
import DropdownMenu from '../DropdownLang/DropdownLang';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.nickname]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      nickname: this.state.nickname,
      password: this.state.password
    };
  }

  render() {
    return (
      // <div className={classes.container}>
      //   <div className={classes.row}>
      <div className={classes.item}>
        <form noValidate onSubmit={this.onSubmit}>
          <input
            type="text"
            className={classes.loginBox}
            name="Логин"
            placeholder="Логин *"
            value={this.state.nickname}
            onChange={this.onChange}
          />
          <input
            type="text"
            className={classes.passwordBox}
            name="Пароль"
            placeholder="Пароль *"
            value={this.state.password}
            onChange={this.onChange}
          />
          <button type="submit" className={classes.btnRegister}>
            Регистрация
          </button>
          <div className={classes.langMenu}>
            {/* DropDownMenu */}
            {/* <img src="#" alt="flag" />
            <img src="#" alt="arrow_down" /> */}
          </div>
        </form>
      </div>
      //   </div>
      // </div>
    );
  }
}

export default Register;
