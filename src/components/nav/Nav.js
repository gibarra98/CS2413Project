import React, { Component } from 'react';
import unbLogo from "../../images/unbLogo.gif";
import "./Nav.css"

export default class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
            <img src={unbLogo}/>
        </div>
      </div>
    )
  }
}
