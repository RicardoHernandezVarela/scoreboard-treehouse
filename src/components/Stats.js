import React from 'react';

/* Import context consumer */
import { Consumer } from '../context/context';

/* Import components */
import Icon from './Icon';

const Stats = () => {

  return (
    <Consumer>
      { context => {

        const totalPlayers = context.players.length;

        /* Get total score from all players */
        const totalPoints = context.players.reduce( (total, player) => {
          return total + player.score;
        }, 0);

        const playersWithHighScore = context.actions.highestPlayers(context.players, context.highestScore);

        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
              </tr>
              <tr>
                <td>Highest Score:</td>
                <td>{ context.highestScore }</td>
              </tr>
              <tr>
                <td><Icon isHighScore={true} /></td>
                <td>{ playersWithHighScore }</td>
              </tr>
            </tbody>
          </table>
        );

      }}
    </Consumer>

  );
}

export default Stats;