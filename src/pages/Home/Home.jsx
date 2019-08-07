import React, { Component } from 'react';
import style from './Home.module.css'
import CalcForm from '../../components/CalcForm/CalcForm';
import Result from '../../components/Result/Result'

class Home extends Component {
  state = {
    isOpenModal: false,
  };
  handleToggleModal = () => {
    this.setState(state => ({
      isOpenModal: !state.isOpenModal
    }));
  };
  render() {
    const {isOpenModal} = this.state
    return (
      <div >
        <div>place for header</div>
        <div><CalcForm /></div>
        <div>{isOpenModal&&<Result  onClose={this.handleToggleModal} />}</div>
        <button onClick={this.handleToggleModal} type="button" className={style.calc}>
                Начать худеть
              </button>
      </div>
    );
  }
}

export default Home;
