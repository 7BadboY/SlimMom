// НА ХУКАХ, не работает; (
// import React, { useCallback } from 'react';
// // import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { toogleModalProductsAction } from '../../../redux/actions/productActions';

// const ShowModalButton = () => {
//   const dispatch = useDispatch();
//   const toogleModalProducts = useCallback(() => dispatch(toogleModalProductsAction));

//   return (
//     <div>
//       <button type="button" onClick={toogleModalProducts}>
//         Открыть модалку
//       </button>
//     </div>
//   );
// };

// ShowModalButton.propTypes = {
//   // toogleModal: PropTypes.func.isRequired
// };

// export default ShowModalButton;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToogleModalButton.module.css';
import { Add } from '../../../assets/icons';

const ShowModalButton = ({ toogleModal }) => {
  return (
    <button type="button" onClick={toogleModal} className={styles.modal_button}>
      <Add className={styles.add_icon} />
    </button>
  );
};

ShowModalButton.propTypes = {
  toogleModal: PropTypes.func.isRequired
};

export default ShowModalButton;
