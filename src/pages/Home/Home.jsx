import React, { Component } from 'react';
import style from './Home.module.css'
import CalcForm from '../../components/CalcForm/CalcForm';

class Home extends Component {
  state = {
    modalOpened: false,
  };

  render() {
    return (
      <div >
        <div>place for header</div>
        <div><CalcForm /></div>
      </div>
    );
  }
}

export default Home;
