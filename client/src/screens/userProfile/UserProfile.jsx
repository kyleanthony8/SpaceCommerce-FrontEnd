import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="profile">
      <div className="profileCore">
        <div className="image">Image</div>
        <div className="description">
          <h1 className="userName">Username</h1>
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

