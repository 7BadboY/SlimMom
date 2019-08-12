import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import * as operations from '../../redux/actions/auth';
// import * as selectors from '.';
import classes from './Login.module.css';
import Icon from '../../components/Icon/Icon';

// import { from } from 'rxjs';

class Login extends Component {
  constructor(props) {
    super(props);
    const isAuthenticated = this.props.isAuthenticated('ytrdytdy', 'jhvukyvu');
  }
  state = {
    ...this.props.state,
    valueLogin: '',
    valuePassword: ''
    // password: '',
    // isAuthenticated: true
  };
  handleChange = ({ target }) => {
    // const { value } = target;
    console.log('TARGET', target.value);
    this.setState({ valueLogin: target.value });
    this.setState({ valuePassword: target.value });
    // this.setState({ [valuePassword]: value });
  };
  // this.onChange = this.onChange.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);

  // onChange(e) {
  //   this.setState({ [e.target.nickname]: e.target.value });
  // }

  //   onSubmit(e) {
  //     e.preventDefault();
  //   //проверка на наличие пользователя
  //   // const user = {
  //     nickname: this.state.nickname,
  //     password: this.state.password
  //   };
  render() {
    // debugger;
    console.log('FUNCTION', this.isAuthenticated);
    console.log('handleChange', this.handleChange);
    console.log('STATE', this.state);
    return (
      <div className={classes.item}>
        <form noValidate onSubmit={this.onSubmit}>
          <input
            type="text"
            className={classes.loginBox}
            nickname="Логин"
            placeholder="Логин *"
            value={this.state.valueLogin}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className={classes.passwordBox}
            password="Пароль"
            placeholder="Пароль *"
            value={this.valuePassword}
            onChange={this.handleChange}
          />
          <button type="submit" className={classes.btnLogin} onClick={this.isAuthenticated}>
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
    );
  }
}

const mapStateToProps = state => ({
  // nickname: state.auth.nickname,
  // password: state.auth.password
  state: state.auth
});

const mapDispatchToProps = dispatch => ({
  isAuthenticated: (nickname, password) => {
    dispatch(operations.registerRequestAC(nickname, password));
    console.log('HELLO');
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
//export default Login;
