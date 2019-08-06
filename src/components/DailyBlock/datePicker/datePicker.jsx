import React from 'react';
import PropTypes from 'prop-types';
import ReactDatetime from 'react-datetime';

const DatePicker = ({ props }) => {
  console.log(props);
  return (
    <div>
      <p>datePicker Component</p>
      <ReactDatetime defaultValue={new Date()} timeFormat={false} locale={window.navigator.language} onChange={null} />
    </div>
  );
};
DatePicker.propTypes = {
  props: PropTypes.func.isRequired
};

export default DatePicker;
