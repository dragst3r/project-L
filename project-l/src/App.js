import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/shopping-list/shopping-list';
import RecipesList from './components/recipes-list/recipes-list'

function App() {
  return (
    <div className="App">
      <ShoppingList name='Nothing to display' />
      <RecipesList recipesList={[{name:'szakszuka'},{name:'pizza'}]}/>
    </div>
  );
}

export default App;
