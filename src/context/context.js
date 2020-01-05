import React, { Component } from 'react'

const ScoreboardContext = React.createContext();

export class Provider extends Component {
    state = {
        players: [
          {
            name: "Ricardo",
            score: 0,
            id: 1
          },
          {
            name: "Laura",
            score: 0,
            id: 2
          },
          {
            name: "Marco",
            score: 0,
            id: 3
          },
          {
            name: "Daniela",
            score: 0,
            id: 4
          }
        ]
    };

   // player id counter
   prevPlayerId = 4;

   handleScoreChange = (index, delta) => {
     this.setState( prevState => ({
       score: prevState.players[index].score += delta
     }));
   }
 
   handleAddPlayer = (name) => {
       if(name !== '') {
        this.setState( prevState => {
            return {
              players: [
                ...prevState.players,
                {
                  name,
                  score: 0,
                  id: this.prevPlayerId += 1
                }
              ]
            };
          });
       } else {
           alert("YOU SHOULD ENTER A PLAYER'S NAME")
       }
   }
 
   handleRemovePlayer = (id) => {
     this.setState( prevState => {
       return {
         players: prevState.players.filter(p => p.id !== id),
       };
     });
   }

  render(){
      return (
          <ScoreboardContext.Provider value={{
              players: this.state.players,
              actions: {
                changeScore: this.handleScoreChange,
                removePlayer: this.handleRemovePlayer,
                addPlayer: this.handleAddPlayer
              }
           }}>
              { this.props.children }
          </ScoreboardContext.Provider>            

      )
  }
}


export const Consumer = ScoreboardContext.Consumer;