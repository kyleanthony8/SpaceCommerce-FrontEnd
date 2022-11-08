import react from "react";
import Home from "./screens/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import UserProfile from "./screens/userProfile/UserProfile.jsx";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import CreateList from "./screens/createList/CreateList";
import { Routes, Route } from "react-router-dom";
import SpaceItem from "./screens/allList/SpaceItem.jsx";
import Checkout from "./screens/Checkout/checkout.jsx";
import { Singlelisting } from "./components";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/account" element={<UserProfile />}></Route>
        <Route path="/allListing" element={<SpaceItem />}></Route>
        <Route path="/details/:id" element={<Singlelisting />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/createListing" element={<CreateList />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
