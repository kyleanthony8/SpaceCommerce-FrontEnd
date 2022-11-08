import "./SignIn.css";
import styles from "../../style";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { signIn } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function SignIn() {
  const { dispatch } = useAuthContext();
  const usernameRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      const user = await signIn(form);
      if (user.username === "Error") {
        alert("Invalid");
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
      <form onSubmit={handleSubmit}>
        <input
          className="input"
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
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
