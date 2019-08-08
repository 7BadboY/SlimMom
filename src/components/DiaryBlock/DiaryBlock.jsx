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
  productsByDay,
  isAllProductsLoader
}) => {
  useEffect(() => {
    console.log({ productsByDay });
    console.log({ isAllProductsLoader });
    console.log(`compDidMount`);
    setAllProd(token);
    const date = new Date().getTime();
    setProductsByDay(token, date);
  }, []);

  const handleDate = e => {
    // console.log(e._d);
    const date = e._d.getTime();

    setProductsByDay(token, date);
    console.log(date);
  };

  return (
    <div className={styles.diaryBlock_wrapper}>
      <DatePicker handleDate={handleDate} />
      {windowWidth > 767 && <AddNewProduct />}
      <EatedProductsList />

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
  isAllProductsLoader: state.dailyBlock.isAllProductsLoader
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
  ).isRequired,
  isAllProductsLoader: PropTypes.bool.isRequired
};
