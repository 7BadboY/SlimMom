import React, { Component } from 'react';
import styles from './Dashboard.module.css';
<<<<<<< HEAD
import Summery from '../../components/Summary/Summary'

const Dashboard = () => {
  return (
    <>
    <section className={styles.grid}>
      <div className={styles.header}>Header</div>
      <div className={styles.calkBlock}>CalcBlock</div>
      <div className={styles.summary}>
        <Summery/>
      </div>
    </section>
    </>
  )
=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import windowSize from 'react-window-size';

class Dashboard extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <>
            <section className={styles.grid}>
             <div className={styles.headerBlock_container}>
              Header
               </div>
             <div className={styles.calcDairyBlock_container}>
                <Route path="/calc/" exact component={calc} />
                <Route path="/diary/" component={diary} />
               </div>
             <div className={styles.summaryBlock_container}>
              SummaryBlock
               </div>
           </section>
          </>
      </Router>
      );
  }
>>>>>>> DashBoard
}

export default Dashboard;

