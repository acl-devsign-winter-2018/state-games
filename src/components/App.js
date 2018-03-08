import React, { Component } from 'react';
import './app.css';
import Player from './player/Player';
import { start, rooms } from './rooms/rooms';
import Room from './rooms/Room';

export default class App extends Component {

  state = {
    rooms,
    room: start,
    player: {
      name: 'player name',
      health: 0,
      skill: 0,
      disguise: 0
    }
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };

  changeHealth= (value) => {
    const player = this.state.player;
    this.setState({
      player: {
        ...player,
        health: this.state.player.health + value
      }
    });   
  };

  changeSkill= (value) => {
    const player = this.state.player;
    this.setState({
      player: {
        ...player,
        health: this.state.player.health - 2,
        skill: this.state.player.skill + value
      }
    });   
  };

  handleStat = (value) => {
    if(this.state.room.title === 'Hideout') { 
      this.changeHealth(value);
    }
    if(this.state.room.title === 'Dojo') { 
      this.changeSkill(value);
    }  
  };
  
  render() {
    const { player, room } = this.state;

    return (
      <div>
        <header>
          <h1>BloodRave</h1>
          <Player player={player}/>
        </header>
        <main>
          <Room 
            room={room} 
            onAction={this.handleStat} 
            onMove={this.handleMove}/>
        </main>
      </div>
    );
  }
}

