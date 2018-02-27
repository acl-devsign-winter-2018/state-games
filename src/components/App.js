import React, { Component } from 'react';
import './app.css';
import { rooms, start } from './rooms';
import Player from './Player';
import Room from './Room';

export default class App extends Component {

  constructor() {
    super();

    this.state = {

    };
    
  }

  render() {
    
    return (
      <div id="container">
        <header id="header">
          <h1>Pokemon Adventure!</h1>
          {/* <Player 
            player={player}
            onUse={this.handleUseItem}
            onNameChange={this.handleNameChange}/> */}
        </header>
        <main id="main">
          {/* <Room room={room} 
              onMove={this.handleMove}
              onItem={this.handleItem}
              action={action}
            /> */}
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