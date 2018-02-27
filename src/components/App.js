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

   render() {
     const { player, room } = this.state;
     return (
       <div>
         <header>
           <h1>An Escape Game</h1>
           <Player player={player}/>
         </header>
         <main>
           <Room room={room}/>
         </main>
       </div>
     );
   }
}