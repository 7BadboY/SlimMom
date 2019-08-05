import React, { Component } from 'react';
import DaylyBlock from '../../components/DailyBlock/DailyBlock'

class Dashboard extends Component {
  state = {
  };

  render() {
    return <>
      <p>Dashboard</p>
      <DaylyBlock />
    </>
  }
}

export default Dashboard;
