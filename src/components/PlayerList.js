import React from 'react';

/* Import consufer from context */
import { Consumer } from '../context/context';

/* Import components */
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { context => {
        return (

          <React.Fragment>
            {context.players.map( (player, index) =>
              <Player 
                {...player}
                key={player.id.toString()} 
                index={index}        
              />
            )}
          </React.Fragment>

        );
      }}
    </Consumer>
  );
}

export default PlayerList;