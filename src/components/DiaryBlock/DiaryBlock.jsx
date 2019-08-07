import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './DatePicker/DatePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList';
// import { products } from './products.json';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ToogleModalButton from './ToogleModalButton/ToogleModalButton';
import {
  toogleModalProductsAction,
  getAllProductsAction,
  getProductsByDayAction
} from '../../redux/actions/productActions';
import styles from './DiaryBlock.module.css';

const DiaryBlock = ({
  windowWidth,
  setAllProd,
  setProductsByDay,
  isModalShowed,
  toogleModal,
  token,
  productsByDay
}) => {
  console.log(productsByDay);

  useEffect(() => {
    console.log(`compDidMount`);
    setAllProd(token);
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    console.log({ date });
    // setProductsByDay(token, date);
  }, []);

  const handleDate = e => {
    // console.log(e._d);
    const date = e._d;
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    setProductsByDay(token, newDate);
    console.log(newDate);
  };

  return (
    <div className={styles.diaryBlock_wrapper}>
      <DatePicker handleDate={handleDate} />
      {windowWidth > 767 && <AddNewProduct />}
      <EatedProductsList products={productsByDay} />

      {isModalShowed && windowWidth < 767 && (
        <AddNewProductModal>
          <AddNewProduct toogleModal={toogleModal} />
        </AddNewProductModal>
      )}

      {!isModalShowed && windowWidth < 767 && <ToogleModalButton toogleModal={toogleModal} />}
    </div>
  );
};

const mapStateToProps = state => ({
  isModalShowed: state.dailyBlock.isModalProduct,
  isAllProductsLoader: state.dailyBlock.isAllProductsLoader,
  productsByDay: state.dailyBlock.productsByDay
});

const mapDispatchToProps = dis => ({
  toogleModal() {
    dis(toogleModalProductsAction());
  },
  setAllProd(_token) {
    dis(getAllProductsAction(_token));
  },
  setProductsByDay(tok, date) {
    dis(getProductsByDayAction(tok, date));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(DiaryBlock));

DiaryBlock.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  toogleModal: PropTypes.func.isRequired,
  isModalShowed: PropTypes.bool.isRequired,
  setAllProd: PropTypes.func.isRequired,
  setProductsByDay: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  productsByDay: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};
