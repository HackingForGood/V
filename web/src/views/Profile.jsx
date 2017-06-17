import React, { Component } from "react";

class Profile extends Component {
  state = {
    firstname: 'Alex',
    lastname: 'Cushing',
  }
  render() {
    return (
      <div className="profileContainer">
        <div className="userBox">
          <div className="userImageCont">
            <img className="userImage" src="https://www.afcinc.org/JGResources/images/user2.png" />
          </div>
          <div className="userInfo">
            <div className="userName">{this.state.firstname} {this.state.lastname}</div>
            <div className="userDescription">Web Developer :) </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
