import React, { Component } from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './datePicker/datePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList';
import { products } from './products.json';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ShowModalButton from './ShowModalButton/ShowModalButton';

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

    return (
      <div>
        <DatePicker />
        {!isModalShow && windowWidth > 767 && <AddNewProduct />}
        <EatedProductsList products={productsDB} />
        {isModalShow && windowWidth < 767 && (
          <AddNewProductModal>
            <AddNewProduct toogleModal={this.handleToogleModal} />
          </AddNewProductModal>
        )}
        {!isModalShow && windowWidth < 767 && <ShowModalButton toogleModal={this.handleToogleModal} />}
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
