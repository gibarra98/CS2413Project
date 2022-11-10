import React, { Component } from "react";
import "./userProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class UserProfile extends Component {

  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
          <FontAwesomeIcon icon={faUser}size="lg" />
          </div>
          <h4>Gabriel Ibarra</h4>
        </div>
        <div className="box"></div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
          </div>
          <div className="card__content">
            <p><b>Alias: </b>Gab</p>
            <p><b>Joined: </b>October 25,2022</p>
          </div>
        </div>
      </div>
    );
  }
}