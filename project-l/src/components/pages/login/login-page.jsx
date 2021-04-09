import React, { useEffect, useState } from "react";

import {signInWithGoogle} from "../../../firebase/firebase";

import SignIn from "../../sign-in/sign-in";
import "./login-page.css";

const LoginPage = () => {
  
  return (
  <div className="login-page">
    LOGIN
    <SignIn />
    <button onClick={signInWithGoogle}>Google</button>
  </div>
)};

export default LoginPage;
