import React, { useState } from "react";
import firebase from "firebase";
import FormInput from "../form-input/form-input";

import "./sign-in.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const createUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((loggedUser) => {
        setUser(loggedUser.user);
        setEmail("");
        setPassword("");
        console.log(user);
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
      {user ? <div>{user.email}</div> : null}
    </div>
  );
};

export default SignIn;
