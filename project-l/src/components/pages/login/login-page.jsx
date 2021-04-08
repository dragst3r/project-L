import React, { useEffect, useState } from "react";

import {signInWithGoogle} from "../../../firebase/firebase";

import SignIn from "../../sign-in/sign-in";
import "./login-page.css";

const LoginPage = () => (
  <div className="login-page">
    LOGIN
    <SignIn />
    <button>Google</button>
  </div>
);

export default LoginPage;
