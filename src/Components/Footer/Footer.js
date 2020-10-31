import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">  
        <div className="Footer-text-container">
          <span className="Footer-text-item">Sam Kim, sam404kim@gmail.com</span>
        </div>     
      </div>
    );
  }
}