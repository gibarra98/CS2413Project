import React, { Component } from "react";
import "./userProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function UserProfile ({username})  {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
          <FontAwesomeIcon icon={faUser}size="lg" />
          </div>
          <h4>{username}</h4>
        </div>
        <div className="box"></div>
        <div className="profile__card">
          <div className="card__header">
            <h4>Users</h4>
          </div>
          <div className="card__content">
            {/* <p><b>Alias: </b>Anon</p> */}
          </div>
        </div>
      </div>
    );
}

export default UserProfile;