import React, { Component } from 'react';
import './app.css';
import { rooms, start } from './room/rooms';
import Trainer from './room/trainer/Trainer';
import Room from './room/Room';

export default class App extends Component {

  state = {
    rooms,
    room: start,
    action: '',
    trainer: {
      name: 'lost trainer',
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
    
    const { room, trainer } = this.state;
    const index = room.items.indexOf(item);
    room.items.splice(index, 1);
    trainer.inventory.push(item);

    this.setState({
      action: '',
      room,
      trainer
    });
  };

  handleUseItem = item => {
    const { room, trainer } = this.state;

    const index = trainer.inventory.indexOf(item);
    trainer.inventory.splice(index, 1);

    const action = room.use ? room.use(item) : '';
    if(!action) room.items.push(item);

    this.setState({
      action,
      room,
      trainer
    });
  };

  handleNameChange = name => {
    const { trainer } = this.state;
    trainer.name = name;
    this.setState({ trainer });
  };

  render() {
    
    const { room, action, trainer } = this.state;

    return (
      <div id="container">
        <header id="header">
          <h1>Pokemon Survival!</h1>
          <Trainer 
            trainer={trainer}
            onUse={this.handleUseItem}
            onNameChange={this.handleNameChange}/>
        </header>
        <main id="main">
          <Room room={ room } 
            onMove={this.handleMove}
            onItem={this.handleItem}
            action={action}
          />
        </main>
        <footer id="footer">
          <ul>
            <li>
              <a href="https://github.com/Theartbug" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-github fa-3x"></span>
                <span className="clip">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/graceprovost/" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-linkedin fa-3x"></span>
                <span className="clip">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:grace.g.provost@gmail.com">
                <span className="fa fa-envelope-square fa-3x"></span>
                <span className="clip">Email</span>
              </a>
            </li>
          </ul>
          <small>&copy; 2018 Grace Provost | Student Work</small>
        </footer>
      </div>
    );
  }
}