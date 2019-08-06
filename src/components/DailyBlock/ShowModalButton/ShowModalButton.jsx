import React from 'react';
import PropTypes from 'prop-types';

const ShowModalButton = ({ toogleModal }) => {
  return (
    <div>
      <button type="button" onClick={toogleModal}>
        asdasdasdasdasdasdasdasd
      </button>
    </div>
  );
};

ShowModalButton.propTypes = {
  toogleModal: PropTypes.func.isRequired
};

export default ShowModalButton;
