import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">  
        <div className="Footer-text-container">
          <span className="Footer-text-item">created by Samuel Kim, sam404kim@gmail.com</span>
        </div>     
      </div>
    );
  }
}