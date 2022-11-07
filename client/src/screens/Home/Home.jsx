import React from 'react'
import styles from "./style";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import UserProfile from "./screens/userProfile/UserProfile.jsx";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from  "./screens/SignIn/SignIn"
import CreateList from "./screens/createList/CreateList";
import { Routes, Route } from "react-router-dom";
import SpaceItem from "./screens/allList/SpaceItem.jsx";
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
      </div>
      );
  export default App;