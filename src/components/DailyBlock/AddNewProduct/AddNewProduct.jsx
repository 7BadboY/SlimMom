import React from 'react';
import PropTypes from 'prop-types';

const AddNewProduct = ({ handleToogleModal }) => {
  return (
    <div>
      <p>Add New Product Component</p>
      <button onClick={null} type="button">
        Add product
      </button>

      {handleToogleModal && (
        <button onClick={handleToogleModal} type="button">
          закрыть модалку
        </button>
      )}
    </div>
  );
};

AddNewProduct.propTypes = {
  handleToogleModal: PropTypes.func.isRequired
};

export default AddNewProduct;
