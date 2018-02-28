import React, { Component } from 'react';
import SelectItem from './SelectItem';

export default class Player extends Component {
  
  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  };

  render() {
    const { player, onNameChange, onUse } = this.props;
    const { editing } = this.state;

    return (
      <div className="player">
        {editing ? 
          <input value={player.name} onChange={({ target }) => onNameChange(target.value)}/> : 
          <span>{player.name}</span>
        }
        <button onClick={this.handleEdit}>{editing ? 'Done' : 'Edit'}</button>
        <SelectItem items={player.inventory} onItem={onUse}/>
      </div>
    );
  }
}