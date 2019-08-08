import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                <Route path="/dashboard/calc/" exact component={<CalcForm />} />
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

export default Dashboard;

