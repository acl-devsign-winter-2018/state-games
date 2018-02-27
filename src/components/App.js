import React, { Component } from 'react';
import './App.css';
import { rooms, start } from './rooms';



export default class App extends Component {

   state = {

     rooms: null,
     room: null,
     player: null
   };

   render() {
     const { player, room } = this.state;
     return (
       <div>
         <header>
           <h1>An Adventure Game</h1>
           <Player player={player}/>
         </header>
         <main>
           <Room room={room}/>
         </main>
       </div>
     );
   }
}