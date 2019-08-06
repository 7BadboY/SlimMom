import React from 'react';
import PropTypes from 'prop-types';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';

const DatePicker = ({ props }) => {
  console.log(`browser language: `, window.navigator.language);
  console.log(props);
  return (
    <div>
      <p>datePicker Component</p>
      <ReactDatetime defaultValue={new Date()} timeFormat={false} locale="ru" onChange={null} />
    </div>
  );
};
DatePicker.propTypes = {
  props: PropTypes.func.isRequired
};

export default DatePicker;
