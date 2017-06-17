import React, { Component } from "react";
import { graphql } from 'react-apollo';

import getUserFromId from './_data/getUserFromId.graphql';

class Profile extends Component {
  render() {
    const { user, loading } = this.props.data;
    if (loading) return null;
    return (
      <div className="profileContainer">
        <div className="userBox">
          <div className="userImageCont">
            <img className="userImage" src="https://www.afcinc.org/JGResources/images/user2.png" />
          </div>
          <div className="userInfo">
            <div className="userName">{user.firstname} {user.lastname}</div>
            <div className="userDescription">Web Developer :) </div>
          </div>
        </div>
      </div>
    );
  }
}

const withData = graphql(getUserFromId, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id,
    },
  }),
});

export default withData(Profile);
