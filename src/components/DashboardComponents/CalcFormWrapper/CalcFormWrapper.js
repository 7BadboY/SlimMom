import React from 'react';
import PropTypes from 'prop-types';
import CalcForm from '../../CalcForm/CalcForm';
import Summary from '../../Summary/Summary';
import styles from '../../../pages/Dashboard/Dashboard.module.css';

const CalcFormWrapper = () => {
  return (
    <div>
      <CalcForm />
      <Summary className={styles.summaryBlock_container} />
    </div>
  );
};

CalcFormWrapper.propTypes = {};

export default CalcFormWrapper;
