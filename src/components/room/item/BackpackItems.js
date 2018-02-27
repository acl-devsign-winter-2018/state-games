import React, { Component } from 'react';
import './backpackItems.css';

export default class BackpackItems extends Component {
  render() {
    const { items, onItem } = this.props;
    if(!items || items.length === 0) return null;

    return (
      <ul className="inventory">
        {items.map(item => (
          <li key={item.key}>
            <img className="inventory-item" src={item.image} alt={item.key} onClick={() => onItem(item)}/>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>   
    );
  }
}