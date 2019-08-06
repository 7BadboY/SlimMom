import React from 'react';
import PropTypes from 'prop-types';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';
import 'react-datetime/css/react-datetime.css';

const DatePicker = ({ props }) => {
  console.log(`browser language: `, window.navigator.language);
  console.log(props);
  return (
    <div>
      <p>datePicker Component</p>
      <ReactDatetime
        // className={s}
        defaultValue={new Date()}
        timeFormat={false}
        locale="ru"
        onChange={null}
        closeOnSelect={true}
      />
    </div>
  );
};
DatePicker.propTypes = {
  props: PropTypes.func.isRequired
};

export default DatePicker;
