import React from 'react';

/* Import consumer from context */
import { Consumer } from '../context/context';

const ResetGame = () => {
    return (
        <Consumer>
          { context => {
            return (
                <button onClick={context.actions.resetPalyersScore}>Reset Game</button>
            );
          }}
        </Consumer>
    );
}

export default ResetGame;

