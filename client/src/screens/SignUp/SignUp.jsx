import "./SignUp.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, signUp } from "../../services/user";

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  let navigate = useNavigate();

  const checkEmail = async () => {
    const users = await getAllUsers();
    if (users.filter((account) => account.email === emailRef.current.value).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const emailFree = await checkEmail();
      if (!emailFree) {
        alert("Please use a valid email account.");
      }
    if (passwordRef.current.value !== confirmRef.current.value || passwordRef.current.value.length < 8) {
      alert("Please use a valid password.");
    } else {
      try {
        const form = {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        await signUp(form);
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Username"
        name="username"
        ref={usernameRef}
      />
      <input
        type="password"
        minLength="8"
        placeholder="Enter Password"
        name="password"
        ref={passwordRef}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
      />
      <input
        type="password"
        ref={confirmRef}
        name="passwordConfirm"
        placeholder="Confirm Password"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        ref={emailRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
