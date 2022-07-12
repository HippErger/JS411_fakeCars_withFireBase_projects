import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const navigate = useNavigate();
  console.log("auth.currentUser:from navigation.js", auth.currentUser);
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          {auth.currentUser ? (
            <li
              className="nav-list-item"
              onClick={async () => {
                await signOut(auth);
              }}
            >
              Logout
            </li>
          ) : (
            <li
              className="nav-list-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
