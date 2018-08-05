import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProgramList from '../Data/ProgramList';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

export default class App extends Component {
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
      this.state.programList.push(ProgramList[i]);
    } 
    this.setState({ arrayInit: true });
  }
  render() {
    const programList = this.state.programList;
    return (
      <div className="App-container">
        <Navbar />
        <div className="App-message-container">
          <h1 className="App-message-item"><b>Command Lines and Concepts at your fingertips!</b></h1>
        </div>
        {programList.map((post) => 
          (
          <div className="App-program-container">
            <Card>
              <Link to={post.url}>
                <h1 className="App-program-item">{post.name}</h1>
              </Link>
            </Card>
          </div>
          )
        )}
        <Footer />
      </div>
    );
  }
}

