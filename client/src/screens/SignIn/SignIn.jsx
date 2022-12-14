import "./SignIn.css";
import styles from "../../style";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { signIn } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function SignIn() {
  const { dispatch } = useAuthContext();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    const checkSignIn = () => {
      if (user) {
        navigate("/", { replace: true });
      }
    };
    checkSignIn();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      const user = await signIn(form);

      if (user.name === "AxiosError") {
        alert("Invalid Username or password");

      } else {
        dispatch({ type: "LOGIN", payload: user });
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signIn">
      <img className="moon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div>

      <form className="signForm" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter Username"
          name="username"
          ref={usernameRef}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
