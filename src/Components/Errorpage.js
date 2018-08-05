import React from 'react';
import Navbar from './Navbar';
import '../CSS/Navbar.css';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <br /><br /><br /><h1 className="navbar-header-item"> 404: Page does not Exist</h1>
      </div>
    </div>
  );
}