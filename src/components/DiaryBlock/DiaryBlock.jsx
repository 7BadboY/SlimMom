import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useWindowSize, useEffectOnce } from 'react-use';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './DatePicker/DatePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ToogleModalButton from './ToogleModalButton/ToogleModalButton';
import { toogleModalProductsAction, getProductsByDayAction } from '../../redux/actions/productActions';
import styles from './DiaryBlock.module.css';

const DiaryBlock = ({ setProductsByDay, isModalShowed, toogleModal, token }) => {
  useEffectOnce(() => {
    console.log(`DiaryBlock: compDidMount`);
    const date = new Date().getTime();
    setProductsByDay(token, date);
  }, []);

  const handleDate = e => {
    // console.log(e._d);
    if (typeof e === 'object') {
      const date = e._d.getTime();
      setProductsByDay(token, date);
      console.log(date);
    }
  };

  const { width, height } = useWindowSize();
  const isLandscape = width > height;
  return (
    <div className={styles.diaryBlock_wrapper}>
      {(!isModalShowed || width > 767 || isLandscape) && <DatePicker handleDate={handleDate} />}

      {(width > 767 || width > height) && <AddNewProduct />}

      {(!isModalShowed || width > 767 || isLandscape) && <EatedProductsList />}

      {isModalShowed && width < 767 && (
        <AddNewProductModal>
          <AddNewProduct toogleModal={toogleModal} />
        </AddNewProductModal>
      )}

      {!isModalShowed && (width < 767 && !isLandscape) && <ToogleModalButton toogleModal={toogleModal} />}
    </div>
  );
};

const mapStateToProps = state => ({
  isModalShowed: state.dailyBlock.isModalProductShowed,
  isAllProductsLoader: state.dailyBlock.isAllProductsLoader
});

const mapDispatchToProps = dis => ({
  toogleModal() {
    dis(toogleModalProductsAction());
  },
  setProductsByDay(tok, date) {
    dis(getProductsByDayAction(tok, date));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiaryBlock);

DiaryBlock.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  isModalShowed: PropTypes.bool.isRequired,
  setProductsByDay: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
};
