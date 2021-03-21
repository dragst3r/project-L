import {useState,useEffect} from 'react';
import "./App.css";
import ShoppingList from "./components/shopping-list/shopping-list";
import RecipesList from "./components/recipes-list/recipes-list";

function App() {
  const [showShoppingList, setShowShoppingList] = useState(true);
  
  const test = (show) =>{
    console.log('Show/hide');
    setShowShoppingList(show)
  }
  return (
    <div className="App">
      <button onClick={()=>test(!showShoppingList)}>{showShoppingList?'Show':'Hide'}</button>
      {showShoppingList && <ShoppingList showShoppingList setShowShoppingList = {setShowShoppingList} name="Nothing to display" />}
      <RecipesList recipesList={[{ name: "szakszuka" }, { name: "pizza" }]} />
      
    </div>
  );
}

export default App;
