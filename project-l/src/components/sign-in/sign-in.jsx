import React, { useState } from "react";
import firebase from "firebase";
import FormInput from "../form-input/form-input";
import { connect } from "react-redux";
import { log_in_user, log_out_user } from "../../redux/user/user.actions";

import "./sign-in.css";

const SignIn = ({logInUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((loggedUser) => {
        logInUser(loggedUser.user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="sign-in">
      <FormInput
        type="email"
        label="email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        type="password"
        label="password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={createUser}>Submit</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(log_in_user(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
