import "./SignUp.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, signUp } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "../../style";

const SignUp = () => {
  const { dispatch } = useAuthContext();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  let navigate = useNavigate();

  const checkEmail = async () => {
    const users = await getAllUsers();
    if (
      users.filter((account) => account.email === emailRef.current.value)
        .length > 0
    ) {
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
    if (
      passwordRef.current.value !== confirmRef.current.value ||
      passwordRef.current.value.length < 8
    ) {
      alert("Please use a valid password.");
    } else {
      try {
        const form = {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        const user = await signUp(form);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up">
        <div className="sign-up-center">
          <h1 className="sign-up-title">Sign Up</h1>
          <p className="sign-up-description">Please complete all Information below:</p>
          <input
            type="text"
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
          <br/>
          <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} type="submit">Create Account</button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
