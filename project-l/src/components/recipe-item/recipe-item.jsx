import React from "react";
import "./recipe-item.css";
import { connect } from "react-redux";

const RecipeItem = (props) => {
  const addIngridiens = (ingridiens)=>{
    ingridiens.forEach(i => {
      props.addListItem(i)
    });
  }
  return (
    <div className="recipe-item" key={props._id}>
      <div className="recipe-top-pane">{props.name}</div>
      <div className="recipe-right-pane">
        <div className='portions'>{props.portions}</div>
        <div className='cooking-time'>{props.cookingTime}</div>
        <div className='difficulty'>{props.cookingTime}</div>
      </div>
      <div className="recipe-main">
        <img alt='' src={props.image} />
        <div>
          <ul>{props.ingridiens.map(i=><li key={i.name}>{i.name+' '+i.quantity+' '+i.unit}</li>)}</ul>
        </div>
      </div>
      <div className="recipe-bottom-pane"><button onClick={()=>addIngridiens(props.ingridiens)}>+ Dodaj składniki do listy</button></div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addListItem: (itemToAdd) => dispatch({type: 'ADD_ITEM_TO_LIST', payload: itemToAdd})
});

export default connect(null,mapDispatchToProps)(RecipeItem);
