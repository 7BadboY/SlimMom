import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import CalcForm from "../../components/CalcForm/CalcForm";
import Summary from '../../components/Summary/Summary';
import windowSize from 'react-window-size';

export default class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Router>
        <>
            <section className={styles.grid}>
             <div className={styles.headerBlock_container}>
              <Header />
               </div>
             <div className={styles.calcDairyBlock_container}>
                <Route path="/dashboard/" exact component={CalcForm} />
                {/* <Route path="/dashboard/diary/" component={diary} /> */}
               </div>
             <div className={styles.summaryBlock_container}>
              <Summary />
               </div>
           </section>
          </>
      </Router>
      );
  }
}
