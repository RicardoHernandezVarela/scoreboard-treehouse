import React from 'react';
import PropTypes from 'prop-types';

/* Import consumer from context */
import { Consumer } from '../context/context';

const Counter = ({ index, score }) => {
  return (
    <Consumer>
      { context => {
        return (
          <div className="counter">
            <button className="counter-action decrement" onClick={() => context.actions.changeScore(index, -1)}> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={() => context.actions.changeScore(index, 1)}> + </button>
          </div>
        );
      }}
    </Consumer>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number
};

export default Counter;