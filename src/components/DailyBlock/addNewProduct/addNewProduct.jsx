import React from 'react';
import PropTypes from 'prop-types';

const AddNewProduct = ({ toogleModal }) => {
  return (
    <div>
      <p>Add New Product Component</p>
      <button onClick={null} type="button">
        Add product
      </button>

      {toogleModal && (
        <button onClick={toogleModal} type="button">
          закрыть модалку
        </button>
      )}
    </div>
  );
};

AddNewProduct.propTypes = {
  toogleModal: PropTypes.func.isRequired
};

export default AddNewProduct;
