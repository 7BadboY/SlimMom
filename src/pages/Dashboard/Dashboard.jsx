import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import CalcForm from "../../components/CalcForm/CalcForm";
import Summary from '../../components/Summary/Summary';
import windowSize from 'react-window-size';

class Dashboard extends Component {
  state = {
  };

  render() {
    const { token } = this.props
    return (
      <Router>
        <>
            <section className={styles.grid}>
             <div className={styles.headerBlock_container}>
             <Header token={token} />
               </div>
             <div className={styles.calcDairyBlock_container}>
                <Route path="/dashboard/" exact component={CalcForm} />
               </div>
             <div className={styles.summaryBlock_container}>
              <Summary />
               </div>
           </section>
          </>
      </Router>
      );
=======
import PropTypes from 'prop-types';
import DiaryBlock from '../../components/DiaryBlock/DiaryBlock';

class Dashboard extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired
  };

  state = {};

  render() {
    const { token } = this.props;
    return (
      <>
        <p>Dashboard</p>
        <DiaryBlock token={token} />
      </>
    );
>>>>>>> DiaryBloack/Pasha
  }
}

export default Dashboard;

