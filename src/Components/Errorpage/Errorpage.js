import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Errorpage.css';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div class="errorpage-container"> 
        <h1> 404: Page does not Exist</h1>
      </div>
      <Footer />
    </div>
  );
}