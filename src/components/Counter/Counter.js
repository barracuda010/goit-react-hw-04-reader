import React from 'react';
import PropTypes from 'prop-types';
import s from './Counter.module.css';

const Counter = ({ count, stroke }) => (
  <p className={s.counter}>
    {count + 1}/{stroke}
  </p>
);
export default Counter;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
};
