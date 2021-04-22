import React from "react";
import "./recipe-item.css";
import { connect } from "react-redux";
import {
  add_item_to_list,
  add_recipe_to_list,
} from "../../redux/shopping-list/shopping-list.actions";

const RecipeItem = (props) => {
  const addIngridiens = (ingridiens) => {
    ingridiens.forEach((i) => {
      props.addListItem({
        name: i.name,
        unit: i.unit,
        bought: false,
        source: { itemSource: props._id, quantity: i.quantity },
      });
    });
  };
  return (
    <div className="recipe-item" key={props._id}>
      <div className="recipe-top-pane">{props.name}</div>
      <div className="recipe-middle-pane">
        <div className="recipe-main">
          <img alt="" src={props.image} />
          <div className="recipe-ingridiens-container">
            <ul className="recipe-ingridiens">
              {props.ingridiens.map((i) => (
                <li className="ingridient" key={i.name}>{`${i.name } ${i.quantity || ''}${i.unit  ==='x'?'':' '}${i.unit || ''}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipe-right-pane">
          <div className="portions">{props.portions}</div>
          <div className="cooking-time">{props.cookingTime}</div>
          <div className="difficulty">{props.cookingTime}</div>
        </div>
      </div>
      <div className="recipe-bottom-pane">
        <button
          onClick={() => {
            addIngridiens(props.ingridiens);
            props.addRecipeItem({
              image: props.image,
              name: props.name,
              _id: props._id,
              quantity: 1,
            });
          }}
        >
          + Dodaj składniki do listy
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addListItem: (itemToAdd) => dispatch(add_item_to_list(itemToAdd)),
  addRecipeItem: (recipeToAdd) => dispatch(add_recipe_to_list(recipeToAdd)),
});

export default connect(null, mapDispatchToProps)(RecipeItem);
