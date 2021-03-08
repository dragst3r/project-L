import React from 'react';
import RecipeItem from '../recipe-item/recipe-item'
import './recipes-list.css';

const RecipesList = (props) => {
    console.log(props)
    return <div className="recipes-list">{props.recipesList.map(r=><RecipeItem name={r.name} />)}</div>
};

export default RecipesList