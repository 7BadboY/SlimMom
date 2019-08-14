import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAllData, updateData } from '../../redux/actions/productActions';
import styles from './Result.module.css';

class Result extends Component {
  state = {
    dailyRate: 0,
    forbiddenProd: [],
    groupBlood: 0,
    currentWeight: 0,
    age: 0,
    height: 0,
    desiredWeight: 0
  };
  backdropRef = createRef();

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    const { groupBlood, currentWeight, age, height, desiredWeight } = this.props;
    this.onHandleCalc();

    let arr = [];
    if (groupBlood == '1') {
      arr = ['яйца', 'зерновые', 'мучные изделия', 'молочные продукты'];
    } else if (groupBlood == '2') {
      arr = ['красное мясо', 'изделия из пшеничной муки', 'молочные продукты'];
    } else if (groupBlood == '3') {
      arr = ['кукуруза', 'гречка', 'арахис', 'чечевица', 'изделия из пшеничной муки'];
    } else {
      arr = ['гречка', 'кукуруза', 'красное мясо', 'фасоль', 'мучные изделия', 'орехи'];
    }

    this.setState({
      forbiddenProd: arr,
      groupBlood: Number(groupBlood),
      currentWeight: Number(currentWeight),
      age: Number(age),
      height: Number(height),
      desiredWeight: Number(desiredWeight)
    });
  }

  onHandleCalc = () => {
    const { currentWeight, age, height, desiredWeight } = this.props;

    this.setState({
      dailyRate:
        10 * Number(currentWeight) +
        6.25 * Number(height) -
        5 * Number(age) -
        161 -
        10 * (Number(currentWeight) - Number(desiredWeight))
    });
  };

  onHandlePost = () => {
    const { add, session, newInfo, onClose } = this.props;
    const { dailyRate, groupBlood, currentWeight, age, height, desiredWeight } = this.state;

    const newData = {
      groupBlood,
      dailyRate,
      currentWeight,
      age,
      height,
      desiredWeight
    };
    if (session.token) {
      newInfo(session.token, newData);
      return onClose();
    }
    add(newData);
    return onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    const { onClose } = this.props;

    if (current && e.target !== current) {
      return;
    }

    onClose();
  };

  render() {
    const { onClose, session } = this.props;
    const { dailyRate, forbiddenProd } = this.state;

    return (
      <>
        <div className={styles.backdrop} ref={this.backdropRef} onClick={this.handleBackdropClick}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.bgButtonColor}>
                <button className={styles.arrow} onClick={onClose} type="button">
                  &crarr;
                </button>
                <button className={styles.cross} onClick={onClose} type="button">
                  &#215;
                </button>
              </div>
              <div className={styles.main}>
                <h2 className={styles.title}>Ваша рекомендуемая суточная норма калорий составляет:</h2>
                <p className={styles.dailyRate}>
                  {dailyRate.toFixed()}
                  <span className={styles.ccal}>ккал</span>
                </p>
                <h2 className={styles.subTitle}>Продукты, которые вам не рекомендуется употреблять:</h2>
                <ol className={styles.menu}>
                  {forbiddenProd.map((el, i) => (
                    <li className={styles.listItem} key={i}>
                      {el}
                    </li>
                  ))}
                </ol>

                {!session.token ? (
                  <Link onClick={this.onHandlePost} className={styles.start} to="/login">
                    Начать худеть
                  </Link>
                ) : (
                  <button type="button" onClick={this.onHandlePost} className={styles.start}>
                    Начать худеть
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  add: store => dispatch(addAllData(store)),
  newInfo: (token, data) => dispatch(updateData(token, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
