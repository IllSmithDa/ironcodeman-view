import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProgramList from './Data/ProgramList';
import GitHub from './Components/Gitbhub';
import Navbar from './Components/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <h1> Iron Code Man</h1>
        <div className="App-message-container">
          <h2>Command Lines at your fingertips!</h2>
        </div>
        {programList.map((post) => 
          (
          <div className="App-program-container">
            <Card>
              <Link to={post.url}>
                <h1>{post.name}</h1>
              </Link>
            </Card>
          </div>
          )
        )}
      </div>
    );
  }
}

export default App;
