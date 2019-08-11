import React from 'react';
import PropTypes from 'prop-types';
import Selector from './ProductSelector/ProductSelector';
import styles from './AddNewProduct.module.css';

const AddNewProduct = ({ toogleModal }) => {
  return (
    <div className={styles.addProduct_wrapper}>
      <Selector />

      <input type="number" placeholder="Граммы" step={10} className={styles.inputProduct_weight} />

      <button onClick={null} type="button" className={styles.add_btn}>
        Добавить
      </button>

      {/* Удалить тугл модал, она будет в хедере! */}
      {toogleModal && (
        <button onClick={toogleModal} type="button">
          закрыть модалку
        </button>
      )}
    </div>
  );
};

AddNewProduct.propTypes = {
  toogleModal: PropTypes.func
};

AddNewProduct.defaultProps = {
  toogleModal: () => {}
};

export default AddNewProduct;
