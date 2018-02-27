import React, { Component } from 'react';
import './App.css';
import { rooms, start } from './rooms';
import Player from './Player';
import Room from './Room';


export default class App extends Component {
  
    state = {
      rooms, 
      room: start, 
      player: {
        name: 'player1',
        inventory: []
      }
    };

    handleMove = roomKey => {
      this.setState({
        room: this.state.room[roomKey]
      });
    };

    render() {
      const { player, room } = this.state;

      return (
        <div>
          <header>
            <h1>Awesome Adventure</h1>
            <Player player={player}/>
          </header>
          <main>
            <Room room={room} onMove={this.handleMove}/>
          </main>
        </div>
      );

    }
}