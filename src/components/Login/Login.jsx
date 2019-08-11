import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import classes from './Login.module.css';
import Icon from '../../components/Icon/Icon';

class Login extends Component {
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

    const user = {
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
          <button type="submit" className={classes.btnLogin}>
            Вход
          </button>
          <div className={classes.langMenu}>
            <ul className={classes.langList}>
              <li>
                <ul className={classes.flags}>
                  <li>
                    <a href="#" onClick="setLang('Ru')">
                      <Icon icon="Flag_Ru" width="24" />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick="setLang('Ua')">
                      <Icon icon="Flag_Ua" width="24" />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Icon icon="Arrow_Down" width="24px" />
              </li>
            </ul>
          </div>
        </form>
      </div>
      //   </div>
      // </div>
    );
  }
}

export default Login;
