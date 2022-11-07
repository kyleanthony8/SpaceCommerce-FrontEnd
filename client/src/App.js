import React from 'react'
import styles from "./style";
import { Navbar,
  Card,
  Filter,
  Footer,
  Hero, Body } from './components'

  const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Filter />
          <Body />
          <p className='heading2' Body goes here />
          <Footer />
        </div>
      </div>
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import UserProfile from "./screens/userProfile/UserProfile.jsx";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from  "./screens/SignIn/SignIn"
import CreateList from "./screens/createList/CreateList";
import { Routes, Route } from "react-router-dom";
import SpaceItem from "./screens/allList/SpaceItem.jsx";



function App() {

  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route path="/account" element={<UserProfile />}></Route>
        <Route path="/search" element={<SpaceItem />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/createListing" element={<CreateList />}></Route>
      </Routes>
    </div>
  );
  
  export default App;