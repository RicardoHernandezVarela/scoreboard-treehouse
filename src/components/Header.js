import React from 'react';

/* Import components */
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import ResetGame from './ResetGame';

const Header = () => {
    return (
      <header>
        <Stats />
        <div className="reset-game">
          <h1>Scoreboard</h1>
          <ResetGame />
        </div>
        <Stopwatch />
      </header>
    );
  }
  
  export default Header;
