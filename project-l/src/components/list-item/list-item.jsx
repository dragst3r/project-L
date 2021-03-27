import React from 'react';
import './list-item.css';

const ListItem = (props)=> {
    return <div className="list-item-div"><p className="list-item-name">{props.name}</p><p className="list-item-quantity">{props.quantity+' '+props.unit}</p></div>
};


export default React.memo(ListItem)