import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import classes from './Login.module.css';

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

    // login(user).then(res => {
    //   if (res) {
    //     this.props.history.push('/dashboard');
    //   }
    // });
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.item}>
            <form noValidate onSubmit={this.onSubmit}>
              {/* <h2>Вход</h2> */}
              <div className={classes.loginBox}>
                <label>Логин</label>
                <input
                  type="text"
                  className={classes.inputSignin}
                  name="Логин"
                  placeholder="Логин"
                  value={this.state.nickname}
                  onChange={this.onChange}
                />
              </div>
              <div className={classes.registerBox}>
                <label>Пароль</label>
                <input
                  type="text"
                  className={classes.inputSignin}
                  name="Пароль"
                  placeholder="Пароль"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className={classes.btn}>
                Вход
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
// class Login extends Component {
//   state = {
//     redirectToPreviousRoute: false,
//     nickname: '',
//     password: ''
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { nickname, password } = this.state;

//     this.props.logIn(
//       {
//         nickname,
//         password
//       },
//       () => {
//         this.setState({ redirectToPreviousRoute: true });
//       }
//     );
//   };

//   handleChange = e => {
//     const value = e.currentTarget.value;
//     const fieldName = e.currentTarget.dataset.fieldName;

//     this.setState(prev => ({
//       ...prev,
//       [fieldName]: value
//     }));
//   };

//   render() {
//     const { location, errorMsg } = this.propsconst;
//     const { form } = location.state || { from: { pathname: '/' } };
//     const { nickname, password, redirectToPreviousRoute } = this.state;

//     if (redirectToPreviousRoute) {
//       return <Redirect to={form} />;
//     }

//     return (
//       <div>
//         {errorMsg && <p>{errorMsg}</p>}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             data-field-name={'nickname'}
//             type={'text'}
//             onChange={this.handleChange}
//             placeholder={'Nickname'}
//             value={nickname}
//           />
//           <input
//             data-field-name={'password'}
//             type={'text'}
//             onChange={this.handleChange}
//             placeholder={'Password'}
//             value={password}
//           />
//           <button type="submit">Вход</button>
//         </form>
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   logIn: PropTypes.func.isRequired,
//   errorMsg: PropTypes.string,
//   nickname: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired
// };

// export default Login;
