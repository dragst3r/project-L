import React, { useEffect, useState } from "react";

import  "../../../firebase/firebase";

import SignIn from "../../sign-in/sign-in";
import "./login-page.css";

const LoginPage = () => (
  <div className="login-page">
    LOGIN
    <SignIn />
  </div>
);

export default LoginPage;
