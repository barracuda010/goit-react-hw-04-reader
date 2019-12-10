import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import s from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string,
      pathname: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { location, history, items } = this.props;
    const stroke = items.length;
    const page = new URLSearchParams(location.search).get('item');

    if (!page || page > stroke) {
      history.replace({
        pathname: '/',
        search: `item=1`,
      });
    }
  }

  handleBack = () => {
    const { history, location } = this.props;
    const page = Number(new URLSearchParams(location.search).get('item'));
    history.replace({
      pathname: location.pathname,
      search: `item=${page - 1}`,
    });
  };

  handleForward = () => {
    const { history, location } = this.props;
    const page = Number(new URLSearchParams(location.search).get('item'));
    history.replace({
      pathname: location.pathname,
      search: `item=${page + 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const stroke = items.length;
    const search = Number(new URLSearchParams(location.search).get('item'));
    const page = search > 0 && search <= stroke && search ? search : 1;
    const count = page - 1;
    return (
      <div className={s.reader}>
        <Controls
          back={this.handleBack}
          forward={this.handleForward}
          stroke={stroke}
          count={count}
        />
        <Counter count={count} stroke={stroke} />
        <Publication
          count={count}
          title={items[count].title}
          text={items[count].text}
        />
      </div>
    );
  }
}
