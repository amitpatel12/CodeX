import React from "react";
import "./Acount.css";

const Account = () => {
  const handleLogout = () => {

  }

  const handleDelete = () => {

  }

  return (
    <div className="account">
      <div className="account-profile">
        <div className="profile-pic">M</div>
        <div className="profile-details">
        <div className="profile-name">
          Name: <span>Amit Kumar Patel</span>
        </div>
        <div className="profile-email">
          Email: <span>patelamitkumar153@gamil.com</span>
        </div>
        <div className="profile-gender">
          Gender: <span>Male</span>
        </div>
        <div className="profile-project">
          Project: <span>8</span>
        </div>
      <div className="buttons">
      <button className="logout" onClick={handleLogout}>Logout</button>
        <button className="delete" onClick={handleDelete}>Delete Account</button>
      </div>
        
      </div>
      </div>
    </div>
  );
};

export default Account;
