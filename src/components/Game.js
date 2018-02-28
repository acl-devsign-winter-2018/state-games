import React, { Component } from 'react';
import './Game.css';
import { rooms, start } from './rooms';
import Player from './Player';
import Room from './Room';

export default class Game extends Component {

  state = {
    rooms,
    room: start,
    player : {
      name: 'Jack',
      inventory: []
    }
  };
  
  handleStairs = roomKey => {
    this.setState(state => ({
      room: state.rooms[roomKey]
    }));
  };

  render() {
    const { player, room } = this.state;
    return (
      <div>
        <header>
          <h1>Adventure Game</h1>
          <Player 
            player={player}/>
        </header>
        <main>
          <Room room={room} onStairs={this.handleStairs}/>
        </main>
      </div>
    );
  }
}
