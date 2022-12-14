import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'

//Class 8: Write ProtectedRoute here 
// It should navigate the user back to the login page if they are not logged in.
// Remember the user from  onAuthStateChanged returns null or an object
// use !! to check for falsy  !!null = false   !!{} = true


const Router = ({user}) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard user={user}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/car/:id" element={<Car/>} />
        </Routes>
    );
};

export default Router;