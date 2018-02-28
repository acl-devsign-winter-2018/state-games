import React, { Component } from 'react';
import './room.css';

export default class SelectItem extends Component {
  render(){
    const { items, onItem } = this.props;
    if(!items || items.length === 0) return null;

    return (
      <ul className='roomItems'>
        {items.map(item => (
          <li  key={item.key}>
            <button onClick={() => onItem(item)}>{item.description}</button>
          </li>
        ))}
      </ul>
    );
  }
}