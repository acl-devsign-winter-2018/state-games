import React, { Component } from 'react';
import './chooseItems.css';

export default class ChooseItems extends Component {
  render() {
    const { items, onItem } = this.props;
    if(!items || items.length === 0) return null;

    return (
      <ul className="items">
        {items.map(item => (
          <li key={item.key}>
            <img className="item" src={item.image} alt={item.key} onClick={() => onItem(item)}/>
          </li>
        ))}
      </ul>   
    );
  }
}