import React, { useState } from "react";
import FormInput from "../form-input/form-input";

import "./sign-in.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <button>Submit</button>
    </div>
  );
};

export default SignIn;
