import React, { Component } from 'react';
import './Navbar.css';

export default class NavBar extends Component {
  goHome = () => {
    window.location.href = "/";
  }
  render() {
    return (
      <div className="navbar-fixed">
            <div className="mobile-title">
              <img src="./favicon.ico" onClick={this.goHome}/>
            </div>
        </div>
    );
  }
}