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
       name: 'player',
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

  handleNameChange = name => {
    const { player } = this.state;
    player.name = name;
    this.setState({ player });
  };
   

  render() {
    const { player, room, action } = this.state;
    return (
      <div>
        <header>
          <h1>An Escape Game</h1>

          <Player player={player}
            onUse={this.handleUseItem}
            onNameChange={this.handleNameChange}/>
        </header>
        <main>
          <Room room={room} 
            onMove={this.handleMove}
            onItem={this.handleItem}
            action={action}
          />
        </main>
      </div>
    );
  }
}