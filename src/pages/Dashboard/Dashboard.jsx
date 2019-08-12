import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import Summary from '../../components/Summary/Summary';
import windowSize from 'react-window-size';
import DiaryWrapper from '../../components/DashboardComponents/DiaryWrapper/DiaryWrapper'
import CalcFormWrapper from '../../components/DashboardComponents/CalcFormWrapper/CalcFormWrapper'
import { connect } from 'react-redux'
import { getProductsByDayAction } from '../../redux/actions/productActions'
class Dashboard extends Component {
  state = {};


  componentDidMaount = () => {
    const token = localStorage.getItem('userToken')
    const date = new Date().getTime()
    setProductsByDay(token, date);
  }


  render() {
    const { token } = this.props;
    const windowSize = this.props
    console.log({ windowSize });
    const width = windowSize.windowWidth;
    return (
      <>
        <section className={styles.grid}>
          <div className={styles.headerBlock_container}>
            <Header token={token} />
          </div>
          <div className={styles.calcDairyBlock_container}>
            <Route path="/dashboard" exact component={CalcFormWrapper} />
            <Route path="/dashboard/diary" component={DiaryWrapper} />
          </div>
        </section>
      </>
    );
  }
}


const mapDispatchToProps = dis => ({
  setProductsByDay(tok, date) {
    dis(getProductsByDayAction(tok, date));
  }
});


export default connect(
  null,
  mapDispatchToProps
)(windowSize(Dashboard))
