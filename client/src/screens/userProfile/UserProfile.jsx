import "./UserProfile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/user";
import { deleteUser } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function UserProfile() {
  const [payload, setPayload] = useState({});
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useAuthContext();

  const DeleteUser = async () => {
    await deleteUser();
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const fetchItem = async () => {
    const res = await getUser(user._id);
    setPayload(res);
  };

  const checkSignIn = () => {
    if (!user) {
      navigate("/", { replace: true });
    } else {
      fetchItem();
    }
  };

  useEffect(() => {
    checkSignIn();
  }, [user]);

  return (
    <div className="profile">
      <div className="profileCore">
        <img className="image" src={payload.avatar} />
        <div className="description">
          <h1 className="userName">{payload.username}</h1>
          <h1 className="bioHeader">Bio</h1>
          <p className="bioText">Lorem ipsum dolor sit amet consecteturet dolore magna aliqua. </p>
        </div>
        <button className="changePass">Change Password</button>
        <button onClick={DeleteUser} className="changePass">Delete Profile</button>
      </div>
      <div className="myList">My List</div>
    </div>
  );
}

export default UserProfile;

