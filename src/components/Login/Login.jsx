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
  }
  state = {
    ...this.props.state,
    valueLogin: '',
    valuePassword: ''
    // password: '',
    // isAuthenticated: true
  };
  isAuthenticated = this.props.isAuthenticated('iuahf8ahfb89aeygf', 'kjsdnvisndviusdb');
  // isAuthenticated = this.props.isAuthenticated(this.state.valueLogin, this.state.valuePassword);
  handleChange = ({ target }) => {
    const { name, value } = target;
    // console.log('TARGET', target.value);
    this.setState({ [name]: value });
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
    console.log('PROPS!!!', this.props);
    console.log('FUNCTION', this.props.isAuthenticated);
    console.log('handleChange', this.handleChange);
    console.log('STATE', this.state);
    return (
      <div className={classes.item}>
        <form onSubmit={this.isAuthenticated}>
          <input
            type="text"
            className={classes.loginBox}
            nickname="Логин"
            placeholder="Логин *"
            name="valueLogin"
            value={this.state.valueLogin}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className={classes.passwordBox}
            password="Пароль"
            placeholder="Пароль *"
            name="valuePassword"
            value={this.valuePassword}
            onChange={this.handleChange}
          />
          <button
            // type="submit"
            className={classes.btnLogin}
            //  onClick={this.isAuthenticated}
          >
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
