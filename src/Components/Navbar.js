import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbarA navbar-inverseA navbar-fixed-topA">
          <div className="container-fluidA">
            <div className="navbar-headerA">
              <Link to="/">
                <div className="navbar-header-item">
                  <h1 className>Iron Code Man</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}