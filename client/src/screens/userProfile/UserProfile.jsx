import "./UserProfile.css";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/user"
import jwtDecode from "jwt-decode";

function UserProfile() {
  const [user, setUser] = useState({})
  const token = localStorage.getItem("token");
  const id = jwtDecode(token);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await getUser(id._id);
      setUser(res)
    };
    fetchItem();
  }, []);

  return (
    <div className="profile">
      <div className="profileCore">
        <div className="image">Image</div>
        <div className="description">{user.username}</div>
      </div>
      <div className="myList">My List</div>
    </div>
  );
}

export default UserProfile;
