import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* Import consumer from context */
import { Consumer } from '../context/context';

/* Import components */
import Counter from './Counter';
import Icon from './Icon';

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
                { name }
                <Icon isHighScore={score >= context.highestScore && context.highestScore !== 0}/>
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