import React, { Component } from 'react';
import { rooms, start } from './rooms.js';
import Room from './Room.js';
import Player from './Player.js';
import './room.css';

export default class App extends Component {
  
  state = {
    rooms,
    room: start,
    player: {
      name: 'Player1',
      inventory: []
    }
  };

  handleMove = roomKey => {
    this.setState({
      action: '',
      room: this.state.rooms[roomKey]
    });
  };

  handleItem = item => {
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

  handleNameChange = name => {
    const { player } = this.state;
    player.name = name;
    this.setState({ player });
  };

  render(){
    const { player, room, action } = this.state;
    return (
      <div>
        <h1>Great Escape</h1>
        <header>
          <Player player={player}
            onNameChange={this.handleNameChange}
            onUse={this.handleUseItem}/>
        </header>
        <main>
          <Room room={room}
            onMove={this.handleMove}
            onItem={this.handleItem}
            action={action}/>
        </main>
      </div>
    );
  }
}