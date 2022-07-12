import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    // use the FireBase Documentation to implement login function
    // it is very similar to the signUp code.
    // https://firebase.google.com/docs/auth/web/password-auth
    // find the signInWithEmailAndPassword function
    // the documentation uses .then() promise chaining and we have been using async/await either one is valid and will work

    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            value={loginEmail}
            name="Email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            value={loginPassword}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
