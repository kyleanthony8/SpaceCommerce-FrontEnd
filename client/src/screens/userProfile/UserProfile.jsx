import "./UserProfile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function UserProfile() {
  const [payload, setPayload] = useState({});
  let navigate = useNavigate();
  const { user } = useAuthContext();

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
          <p className="emailAddress">Email Address</p>
        </div>
        <button className="changePass">Change Password</button>
      </div>
      <div className="myList">My List</div>
    </div>
  );
}

export default UserProfile;

