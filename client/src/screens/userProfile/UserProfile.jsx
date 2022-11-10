import "./UserProfile.css";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { deleteUser } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";
import ItemDisplay from "../../components/ItemDisplay"

function UserProfile() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useAuthContext();

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
        <img className="imagePro" src={user.avatar} />
        <div className="description">
          <h1 className="userName">{user.username}</h1>
          <h1 className="bioHeader">Bio</h1>
          <p className="bioText">Lorem ipsum dolor sit amet consecteturet dolore magna aliqua. </p>
        </div>
        <button onClick={changePassword} className="changePass">Change Password</button>
        <button onClick={DeleteUser} className="changePass">Delete Profile</button>
      </div>
      {user.listing.length > 0 ? (
        <div className="myList">
          {user.listing.map((item, index) => {
            console.log(item.image)
            return <ItemDisplay item={item} key={index} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UserProfile;

