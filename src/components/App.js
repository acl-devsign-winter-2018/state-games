import React, { Component } from 'react';
import './App.css';
import { rooms, start } from './room/rooms';
import Room from './room/Room';


export default class App extends Component {

  state = {
    rooms,
    room: start
  };

  handleMove = roomKey => {
    this.setState({
      action: '',
      room: this.state.rooms[roomKey]
    });
  };

  render() {
    const { room, action } = this.state;

    return (
      <div className="app">
        
        <header role="banner">
          <h1>Food Face</h1>
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