import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
        <div className="userBox">
          <div className="userImageCont">
            <img className="userImage" />
          </div>
          <div className="userInfo">
            <div className="userName"></div>
            <div className="userDescription"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
