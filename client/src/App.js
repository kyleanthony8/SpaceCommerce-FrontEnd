import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import UserProfile from "./screens/userProfile/UserProfile.jsx"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />  
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route path="account" element={<UserProfile />}></Route>
      <Route path=":any" element={<h1>Not Home</h1>}></Route>
    </Routes>

    </div>
  );
}

export default App;
