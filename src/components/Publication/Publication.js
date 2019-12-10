import React from 'react';
import PropTypes from 'prop-types';
import s from './Publication.module.css';

const Publication = ({ title, text, count }) => (
  <article className={s.publication}>
    <h2>
      {count + 1}.{title}
    </h2>
    <p>{text}</p>
  </article>
);

export default Publication;

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
