import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize, useEffectOnce } from 'react-use';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './DatePicker/DatePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ToogleModalButton from './ToogleModalButton/ToogleModalButton';
import styles from './DiaryBlock.module.css';

const DiaryBlock = () => {
  const isModalShowed = useSelector(state => state.dailyBlock.isModalProductShowed); // Стейт модалки в моб версии

  const { width, height } = useWindowSize(); // Размер окна

  const isLandscape = width > height; // Отслеживаем Landscape. useOrientation из react-use не подходит

  // const tokenFromlocalStorage = localStorage.getItem('userToken');

  // ComponentDidMount
  useEffectOnce(() => {
    console.log(`DiaryBlock: compDidMount`);
    // const date = new Date().getTime();
    // setProductsByDay(tokenFromlocalStorage, date);
  }, []);

  return (
    <div className={styles.diaryBlock_wrapper}>
      {(!isModalShowed || width > 767 || isLandscape) && <DatePicker />}

      {(width > 767 || width > height) && <AddNewProduct />}

      {(!isModalShowed || width > 767 || isLandscape) && <EatedProductsList />}

      {isModalShowed && width < 767 && (
        <AddNewProductModal>
          <AddNewProduct />
        </AddNewProductModal>
      )}

      {!isModalShowed && (width < 767 && !isLandscape) && <ToogleModalButton />}
    </div>
  );
};

export default DiaryBlock;

DiaryBlock.propTypes = {};
