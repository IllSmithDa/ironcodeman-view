import React, { Component } from 'react';
import ProgramList from '../../Data/ProgramList';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Homepage.css';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      programList: [],
      arrayInit: false
    }
  }
  componentDidMount() {
    const programArr = [];
    for (let i = 0; i < ProgramList.length; i += 1) {
      programArr.push(ProgramList[i]);
    } 
    this.setState({ arrayInit: true, programList: programArr });
  }
  handleLinkClick = (urlLink) => {
    window.location.href = urlLink;
  }
  render() {
    const programList = this.state.programList;
    return (
      <div className="app-container">
        <Navbar />
        <div className="homepage-container">
          <div className="app-banner">
            <div></div>
            <p>IRON CODE MAN</p>
            <span>Quick CLI and Concepts reference</span>
          </div>
          <div className="card-container">
              {programList.map((post) => 
                (
                  <div>
                    <div className="card-item" onClick={() => { this.handleLinkClick(post.url)}}>
                      <span>{post.name}</span>
                    </div>   
                  </div>
                )
              )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

