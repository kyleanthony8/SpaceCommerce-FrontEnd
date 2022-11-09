import "./ChangePW.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "../../style";

const ChangePW = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useAuthContext();

  useEffect(() => {
    const checkSignIn = () => {
      if (!user) {
        navigate("/", { replace: true });
      }
    };
    checkSignIn();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      newPasswordRef.current.value.length < 8
    ) {
      alert("Please use a valid password.");
    } else {
      try {
        const form = {
          password: passwordRef.current.value,
          newPassword: newPasswordRef.current.value,
          username: usernameRef.current.value,
        };
        await changePassword(user._id, form);
        dispatch({ type: "LOGOUT" });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up">
        <div className="sign-up-center">
          <h1 className="sign-up-title">Change Password</h1>
          <p className="sign-up-description">
            Please complete all Information below:
          </p>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            ref={usernameRef}
          />
          <input
            type="password"
            ref={passwordRef}
            name="passwordConfirm"
            placeholder="Current Password"
          />
          <input
            type="password"
            minLength="8"
            placeholder="Enter New Password"
            name="password"
            ref={newPasswordRef}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}"
          />
          <br />
          <button
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            type="submit"
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangePW;
