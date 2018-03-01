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
       room: this.state.rooms[roomKey]
     });
   };

   

   render() {
     const { room, player } = this.state;
    
     return (
       <div>
         <header>
           <h1>An Escape Game</h1>
           <Player player={player}/>
         </header>
         <main>
           <Room room={room} onMove={this.handleMove}/>
         </main>
       </div>
     );
   }
}