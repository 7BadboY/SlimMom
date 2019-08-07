import React, { Component } from 'react';
import DiaryBlock from '../../components/DiaryBlock/DiaryBlock';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <>
        <p>Dashboard</p>
        <DiaryBlock />
      </>
    );
  }
}

export default Dashboard;
