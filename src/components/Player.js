import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* Import consumer from context */
import { Consumer } from '../context/context';

/* Import components */
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    
    const { 
      name,
      id,
      score,
      index
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { context => {
            return (
              <span className="player-name">
                <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                { name } {score}
              </span>
            );
          }}
        </Consumer>

        <Counter 
          score={score}
          index={index}
        />
      </div>
    );
  }
}

export default Player;