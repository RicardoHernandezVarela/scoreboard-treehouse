import React from 'react';

/* Import components */
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
    return (
      <header>
        <Stats />
        <h1>Scoreboard</h1>
        <Stopwatch />
      </header>
    );
  }
  
  export default Header;
