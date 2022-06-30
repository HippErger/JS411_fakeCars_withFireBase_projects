import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword,  signOut} from 'firebase/auth'


const SignUp = () => {
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const signUp = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
     //   console.log("userCredential.user", userCredential.user);
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
   // console.log("auth.currentUser:from Login.js",auth.currentUser);
    return (
      <div className="App">
            <Container maxWidth="sm">
          <form className="login-form" onSubmit={signUp}>
            <TextField
              required
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              value={registerEmail}
              name="Email"
              label="Email"
              type="text"
            />
            <TextField
              required
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              value={ registerPassword}
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </form>
        </Container>
      </div>
    );
  };
export default SignUp  