import React, { Component } from 'react';
import ChooseItems from '../item/ChooseItems';
import './trainer.css';

export default class Trainer extends Component {
  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  };

  render() {
    const { trainer, onUse, onNameChange } = this.props;
    const { editing } = this.state;

    return (
      <div className="trainer">
        <div className="trainer-name">
          {editing ? 
            <input value={trainer.name} onChange={({ target }) => onNameChange(target.value)}/> : 
            <span>{trainer.name}</span>
          }
          <button onClick={this.handleEdit}>{editing ? 'Done' : 'Edit'}</button>
        </div>
        <ChooseItems items={trainer.inventory} onItem={onUse}/>
      </div>
    );
  }
}