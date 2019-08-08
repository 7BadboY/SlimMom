import React from 'react';
import PropTypes from 'prop-types';
import Selector from './ProductSelector/ProductSelector';

const AddNewProduct = ({ toogleModal }) => {
  return (
    <div>
      <Selector />

      <input type="number" placeholder="Граммы" />

      <button onClick={null} type="button">
        Add product
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
