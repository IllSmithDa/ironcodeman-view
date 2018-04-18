import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">  
        <div className="Footer-text-container">
          <p className="Footer-text-item">created by Samuel Kim, sams404kim@gmail.com</p>
        </div>     
      </div>
    );
  }
}