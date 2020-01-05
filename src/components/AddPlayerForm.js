import React from 'react';

/* Import consumer from context */
import { Consumer } from '../context/context';

const AddPlayerForm = () => {

  const playerInput = React.createRef();

  return (
    <Consumer>
      { context => {

        const handleSubmit = (event) => {
          event.preventDefault();
          context.actions.addPlayer(playerInput.current.value);
          event.currentTarget.reset();
        }

        return (
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              ref={playerInput}
              placeholder="Enter a player's name"
            />
            
            <button type="submit" className="add">
                Add Player
            </button>
          </form>         
        );
      }}
    </Consumer>
    
  );
}

export default AddPlayerForm;