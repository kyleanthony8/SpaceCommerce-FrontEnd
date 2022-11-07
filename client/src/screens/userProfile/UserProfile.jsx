import "./UserProfile.css";
import "./images/avatar.png";
import "./images/stars.png"

function UserProfile() {
  return (
    <div className="profile">
      <div className="profileCore">
        <div className="image"></div>
        <div className="description">       Username's Profile
          <p>
            Email Address:
          </p>
          <p>
            Anomolies Owned:
          </p>
          <p>
          </p>
          <p>
          </p>
        </div>
      </div>
      <div className="myList">My Listings</div>
    </div>
  );
}

export default UserProfile;
