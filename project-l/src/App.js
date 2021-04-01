import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import LoginPage from "./components/pages/login/login-page";
import RecipesPage from "./components/pages/recipes/recipes-page";
import ShoppingList from "./components/shopping-list/shopping-list";

function App() {
  const [showShoppingList, setShowShoppingList] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/shop-list">
            <ShoppingList
              showShoppingList
              setShowShoppingList={setShowShoppingList}
              name="Nothing to display"
            />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <RecipesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
