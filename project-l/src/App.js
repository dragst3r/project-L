import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import LoginPage from "./components/pages/login/login-page";
import RecipesPage from "./components/pages/recipes/recipes-page";
import ShoppingList from "./components/shopping-list/shopping-list";
import { auth } from "./firebase/firebase";
import { connect } from "react-redux";
import { log_in_user, log_out_user } from "./redux/user/user.actions";

function App({ loggedUser, logInUser, logOutUser }) {
  const [showShoppingList, setShowShoppingList] = useState(false);
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        logInUser({ displayName, email, photoURL });
      } else logOutUser();
    });
  }, [loggedUser, logInUser]);

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

const mapStateToProps = (state) => ({
  loggedUser: state.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(log_in_user(user)),
  logOutUser: () => dispatch(log_out_user()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
