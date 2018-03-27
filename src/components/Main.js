import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { rooms, start } from './rooms';
import { addUser, logOut } from './actions';
import Player from './Player';
import Room from './Room';



class Main extends Component {

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
       action: '',
       room: this.state.rooms[roomKey]
     });
   };

   handleItem = item => {
     const { room, player } = this.state;
     const index = room.items.indexOf(item);
     room.items.splice(index, 1);
     const p1 = player.inventory.slice();
     p1.push(item);

     if(item.prevent) {
       this.setState({ action: item.prevent });
       return;
     }

     this.setState({
       action: '',
       room,
       player: {
         name: 'Player1',
         inventory: p1
       }
     });
   };

   handleUseItem = item => {
     const { room, player } = this.state;
     const index = player.inventory.indexOf(item);
     const p2 = player.inventory.slice();
     p2.splice(index, 1);

    
     const action = room.use ? room.use(item) : '';
     if(!action) room.items.push(item);
   

     this.setState({
       action,
       room,
       player: {
         name: 'Player1',
         inventory: p2
       }
     });
   };


  handelSignOut = () => {
    logOut();
  };
   

  render() {
    const { player, room, action } = this.state;
    return (
      <div>
        <header>
          <h1>An Escape Game</h1>
          <Room className='room' room={room}
            onMove={this.handleMove}
            onItem={this.handleItem}
            action={action}/>
          <Player className='playerDisplay' player={player}
            onUse={this.handleUseItem}/>
        </header> 
        <footer>
          <Link to="/" onClick={logOut}>Log out</Link>
        </footer>
      </div>
    );
  }
}

export default connect (
  state => ({ user: state.user }),
  { addUser, logOut }
)(Main);