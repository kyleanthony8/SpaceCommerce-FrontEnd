import './SignIn.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { signIn, signOut } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function SignIn() {
  const { dispatch } = useAuthContext()
  const usernameRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        "username": usernameRef.current.value,
        "password": passwordRef.current.value
      };
      const user = await signIn(form);
      if (user.username === 'Error') {
        alert("Invalid")
      } else {
        dispatch({ type: 'LOGIN', payload: user })
        navigate("/", { replace: true });
        // console.log(user)
      }
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className='signIn'>
 <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Username"
        name="username"
        ref={usernameRef}
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        ref={passwordRef}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default SignIn;