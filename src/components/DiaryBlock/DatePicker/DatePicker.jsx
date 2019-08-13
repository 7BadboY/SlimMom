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
  const getProductsByDay = (token, date) => dispatch(getProductsByDayAction(token, date)); // фетч продуктов по дате
  const token = localStorage.getItem('userToken');

  // Обработчик при клике на дату
  const handleDateClick = e => {
    if (typeof e === 'object') {
      const date = e._d.getTime(); // Берем дату в миллисек
      getProductsByDay(token, date); // фетчим продукты и записиваем в стор
    }
  };

  return (
    <div className={styles.datePicker_wrapper}>
      <ReactDatetime
        defaultValue={new Date()}
        locale={window.navigator.language}
        closeOnSelect
        onChange={handleDateClick}
      />
      {/* <Calendar />  */}
      <i className={styles.datePicker_icon} />
    </div>
  );
};

DatePicker.propTypes = {};
DatePicker.defaultProps = {};
export default DatePicker;
