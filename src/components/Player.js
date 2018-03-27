import React, { Component } from 'react';
import ChooseItems from './ChooseItems';
import './Player.css';
import { connect } from 'react-redux';



class Player extends Component {
  state = {
    editing: false
  };


  render() {
    const { player, onUse, user } = this.props;
  
    return (
      <div className="player">
        {user.displayName ?
          <div>{user.displayName}</div>
          :
          player}
        Inventory
        <ChooseItems items={player.inventory} onItem={onUse}/>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  null
)(Player);