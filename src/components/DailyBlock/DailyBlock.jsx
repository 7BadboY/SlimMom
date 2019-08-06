import React, { Component } from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './DatePicker/DatePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList';
import { products } from './products.json';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ToogleModalButton from './ToogleModalButton/ToogleModalButton';
import s from '../DailyBlock/DiaryBlock/DailyBlock.module.css';

export class DaylyBlock extends Component {
  static propTypes = {
    windowWidth: PropTypes.number.isRequired
  };

  state = {
    productsDB: products,
    isModalShow: false
  };

  componentDidMount = () => {
    // fetch and set to redux store products
    // set current date
  };

  handleToogleModal = () => {
    this.setState(
      state => ({ isModalShow: !state.isModalShow }),
      () => {
        console.log('Колбек: ', this.state);
      }
    );
  };

  render() {
    const { productsDB, isModalShow } = this.state;
    // const { products } = this.props
    const { windowWidth } = this.props;
    console.log(`Width:`, windowWidth);
    return (
      <div>
        <div className={s.wrapper}>
          <DatePicker />
          {windowWidth > 767 && <AddNewProduct />}
          <EatedProductsList products={productsDB} />
          {isModalShow && windowWidth < 767 && (
            <AddNewProductModal className={s.wrapper}>
              <AddNewProduct handleToogleModal={this.handleToogleModal} className={s.wrapper} />
            </AddNewProductModal>
          )}
          {!isModalShow && windowWidth < 767 && <ToogleModalButton toogleModal={this.handleToogleModal} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSome: state.isSome
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(DaylyBlock));
