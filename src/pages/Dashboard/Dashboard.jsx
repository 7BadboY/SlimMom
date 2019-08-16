import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PropTypes from 'prop-types';
import DiaryBlock from '../../components/DiaryBlock/DiaryBlock';
import { Route } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { getUserData } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import CalcForm from '../../components/CalcForm/CalcForm';
import Summary from '../../components/Summary/Summary';

class Dashboard extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired
  };

  state = {};
  componentDidMount = () => {
    const token = localStorage.getItem('userToken');

    if (!!token) {
      this.props.userData(token);
    }
  };

  render() {
    const { windowWidth, location, token, user } = this.props;
    // console.log(this.props.user);
    return (
      <section className={styles.grid}>
        <div className={styles.headerBlock_container}>
          <Header token={token} />
        </div>
        <div className={styles.calcDairyBlock_container}>
          <Route path="/dashboard" exact component={CalcForm} />
          <Route path="/dashboard/diary" component={DiaryBlock} />
        </div>
        {token ? (
          location.pathname === '/dashboard' ? (
            windowWidth > 767 && (
              <div className={styles.summaryBlock_container}>
                <Summary />
              </div>
            )
          ) : (
            <div className={styles.summaryBlock_container}>
              <Summary />
            </div>
          )
        ) : (
          ''
        )}
      </section>
    );
  }
}

const mapStateToProp = state => ({
  user: state.session
});

const mapDispatchToProps = {
  userData: getUserData
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(windowSize(Dashboard));
