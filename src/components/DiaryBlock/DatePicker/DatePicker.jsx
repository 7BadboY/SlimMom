import React from 'react';
import { useDispatch } from 'react-redux';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/en-au';

import { getProductsByDayAction } from '../../../redux/actions/productActions';

import styles from './DatePicker.module.css';
// import { Calendar } from '../../../assets/icons';

const DatePicker = () => {
  const dispatch = useDispatch();
  const setProductsByDay = (token, date) => dispatch(getProductsByDayAction(token, date)); // фетч продуктов по дате
  const tokenFromlocalStorage = localStorage.getItem('userToken');

  // Обработчик при клике на дату
  const handleDateClick = e => {
    // console.log(e._d);
    if (typeof e === 'object') {
      const date = e._d.getTime();
      setProductsByDay(tokenFromlocalStorage, date);
      // console.log(date);
    }
  };

  return (
    <div className={styles.datePicker_wrapper}>
      <ReactDatetime
        defaultValue={new Date()}
        // timeFormat={false}
        locale={window.navigator.language}
        closeOnSelect
        onChange={handleDateClick}
      />
      {/* <Calendar /> */}
      <i className={styles.datePicker_icon} />
    </div>
  );
};

DatePicker.propTypes = {};
DatePicker.defaultProps = {};
export default DatePicker;
