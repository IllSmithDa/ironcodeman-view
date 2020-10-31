import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">  
        <div className="footer-text-container">
          <span className="footer-text-item">Sam Kim: <a href="https://www.sam404kim.com" target="_blank" >sam404kim.com</a></span>
        </div>     
      </div>
    );
  }
}