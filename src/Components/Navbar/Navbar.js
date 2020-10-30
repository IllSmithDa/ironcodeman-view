import React, { Component } from 'react';
import './Navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
            <div>  
                <span><a href="/">IRON CODE MAN</a></span>
            </div>
        </div>
    );
  }
}