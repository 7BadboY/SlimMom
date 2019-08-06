import React from 'react';
import PropTypes from 'prop-types';

const AddNewProduct = ({ toogleModal }) => {
  return (
    <div>
      <p>Add New Product Component</p>
      <button onClick={toogleModal} type="button">
        asdasdasdasd
      </button>
    </div>
  );
};

AddNewProduct.propTypes = {
  toogleModal: PropTypes.func.isRequired
};

export default AddNewProduct;
