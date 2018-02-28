import React, { Component } from 'react';
import './Player.css';

export default class Player extends Component {
  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  }

  render() {

    const { player, onNameChange } = this.props;
    const { editing } = this.state;

    return (
      <div className="player">
        {editing ? 
          <input value={player.name} onChange={({ target }) => onNameChange(target.value)}/> : 
          <span>{player.name}</span>
        }
        &nbsp;
        <button onClick={this.handleEdit}>{editing ? 'Done' : 'Edit'}</button>
      </div>
    );
  }
}