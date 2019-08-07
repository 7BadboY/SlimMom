import React from 'react';
import styles from './Dashboard.module.css';
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
}

export default Dashboard;

