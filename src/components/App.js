import React from 'react';

/* Import components */
import Header from './Header';
import PlayerList from './PlayerList';


const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <PlayerList />

    </div>
  );
}

export default App;
