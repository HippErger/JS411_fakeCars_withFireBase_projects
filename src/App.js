// import React from "react";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase-config";
import Navigation from "./components/Navigation";
import Router from "./Router";

import "./App.css";

function App() {
  // create a useState hook to track FireBase user authentication
  // const [user, setUser] =
  // write a useEffect hook for onAuthStateChanged and set the user state.

  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
