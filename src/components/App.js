import React, { Component } from 'react';
import './App.css';
import { rooms, start } from './room/rooms';
import Room from './room/Room';
import Player from './player/Player';


export default class App extends Component {

  state = {
    rooms,
    room: start,
    player: {
      name: 'your name'
    }
  };

  handleMove = roomKey => {
    this.setState({
      action: '',
      room: this.state.rooms[roomKey]
    });
  };

  handleNameChange = name => {
    const { player } = this.state;
    player.name = name;
    this.setState({ player });
  };

  render() {
    const { room, action, player } = this.state;

    return (
      <div className="app">
        
        <header role="banner">
          <h1>Food Face</h1>
          <Player 
            player={player}
            onNameChange={this.handleNameChange}
          />
        </header>

        <main role="main">
          <Room room={room}
            onMove={this.handleMove}
            action={action}
          />
        </main>

        <footer role="contentinfo" id="footer">
          <p>(c) Food Face App | <a href="https://github.com/limongoo/state-games" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>

      </div>
    );
  }
}