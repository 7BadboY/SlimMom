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
import { handlerToogleModalProducts, getAllProducts } from '../../redux/actions/productActions';

export class DaylyBlock extends Component {
  static propTypes = {
    windowWidth: PropTypes.number.isRequired,
    toogleModal: PropTypes.func.isRequired,
    isModalShowed: PropTypes.bool.isRequired,
    showAllProd: PropTypes.func.isRequired
  };

  state = {
    productsDB: products
  };

  componentDidMount = () => {
    const { showAllProd } = this.props;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDQ5NmNhMGNhYzk1YzFmMjQ2ZDU1YjIiLCJjcmVhdGVkRGF0ZSI6MTU2NTA5MzU4MjczNSwiZXhwIjoxNTY3Njg1NTgyfQ.hUuw6uW5aw9y5iGJf8AJc0s9ox7GXN4b67aDx6v-g0o';
    showAllProd(token);
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
    const { productsDB } = this.state;
    // const { products } = this.props
    const { windowWidth, toogleModal, isModalShowed } = this.props;
    return (
      <div>
        <DatePicker />
        {windowWidth > 767 && <AddNewProduct />}
        <EatedProductsList products={productsDB} />
        {/* {isFetchLoader && <>} */}

        {isModalShowed && windowWidth < 767 && (
          <AddNewProductModal>
            <AddNewProduct toogleModal={toogleModal} />
          </AddNewProductModal>
        )}
        {!isModalShowed && windowWidth < 767 && <ToogleModalButton toogleModal={toogleModal} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isModalShowed: state.dailyBlock.isModalProduct
});

const mapDispatchToProps = dis => ({
  toogleModal() {
    dis(handlerToogleModalProducts());
  },
  showAllProd(token) {
    dis(getAllProducts(token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(DaylyBlock));
