import "./UserProfile.css";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { deleteUser } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function UserProfile() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useAuthContext();

  console.log(user)
  const DeleteUser = async () => {
    await deleteUser();
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const changePassword = async () => {
    navigate("/ChangePassword");
  };

  const checkSignIn = async() => {
    if (!user) {
      navigate("/", { replace: true });
    } 
  };

  useEffect(() => {
    checkSignIn();
  }, []);

  if (!user) return <h1>Loading...</h1>;

  return (
    <div className="profile">
      <div className="profileCore">
        <img className="image" src={user.avatar} />
        <div className="description">
          <h1 className="userName">{user.username}</h1>
          <h1 className="bioHeader">Bio</h1>
          <p className="bioText">Lorem ipsum dolor sit amet consecteturet dolore magna aliqua. </p>
        </div>
        <button onClick={changePassword} className="changePass">Change Password</button>
        <button onClick={DeleteUser} className="changePass">Delete Profile</button>
      </div>
      <div className="myList">My List</div>
    </div>
  );
}

export default UserProfile;

