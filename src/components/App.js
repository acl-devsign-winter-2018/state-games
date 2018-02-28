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
      name: 'Your Name',
      inventory: []
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

  handleItem = item => {
    if(item.prevent) {
      this.setState({ action: item.prevent });
      return;
    }

    const { room, player } = this.state;

    const index = room.items.indexOf(item);
    room.items.splice(index, 1);
    player.inventory.push(item);

    this.setState({
      action: '',
      room,
      player
    });
  };

  handleUseItem = item => {
    const { room, player } = this.state;

    const index = player.inventory.indexOf(item);
    player.inventory.splice(index, 1);

    const action = room.use ? room.use(item) : '';
    if(!action) room.items.push(item);

    this.setState({
      action,
      room,
      player
    });
  };

  render() {
    const { room, action, player } = this.state;

    return (
      <div className="app">
        
        <header role="banner" id="header">
          <h1>Food Face Game</h1>
          <p>Find all the foods and bring it back to the crash pad!</p>
          <Player 
            player={player}
            onNameChange={this.handleNameChange}
            onUse={this.handleUseItem}
          />
        </header>

        <main role="main" id="main">
          <Room room={room}
            onMove={this.handleMove}
            onItem={this.handleItem}
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