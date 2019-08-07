import React from 'react';
import PropTypes from 'prop-types';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';
import 'react-datetime/css/react-datetime.css';
import s from './DailyPicker.module.css';
import icon from '../../Icon/iocn_calendar.png';

const DatePicker = ({ props }) => {
  console.log(`browser language: `, window.navigator.language);
  console.log(props);
  return (
    <div className={s.firstBlock}>
      <p>datePicker Component</p>
      <ReactDatetime
        className={s.calendar}
        defaultValue={new Date()}
        timeFormat={false}
        locale="ru"
        onChange={null}
        closeOnSelect={true}
      />
      {/* <img src={icon} alt="" /> */}
      <div className={s.calendar_picture} />
    </div>
  );
};
DatePicker.propTypes = {
  props: PropTypes.func.isRequired
};

export default DatePicker;
