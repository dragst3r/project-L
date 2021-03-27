import React from 'react';
import RecipeItem from '../recipe-item/recipe-item'
import './recipes-list.css';
import {recipes} from '../../assets/recipes';



console.log(recipes)
const RecipesList = (props) => {
    console.log(props)
    return <div className="recipes-list">{recipes.map(r=><RecipeItem addToList={()=>{}} name={r.name} {...r}/>)}</div>
};



export default RecipesList