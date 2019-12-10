import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ back, forward, count, stroke }) => (
  <section className={s.controls}>
    <button
      onClick={back}
      className={s.button}
      disabled={count === 0}
      type="button"
    >
      Назад
    </button>
    <button
      onClick={forward}
      className={s.button}
      disabled={count === stroke - 1}
      type="button"
    >
      Вперед
    </button>
  </section>
);

export default Controls;
Controls.propTypes = {
  back: PropTypes.func.isRequired,
  forward: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
};
