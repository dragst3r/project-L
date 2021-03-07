import React from 'react';
import './list-item.css';

const ListItem = (props)=> {
    return <div class="list-item-div"><p class="list-item-name">{props.name}</p><p class="list-item-quantity">{props.quantity}</p></div>
};

export default ListItem