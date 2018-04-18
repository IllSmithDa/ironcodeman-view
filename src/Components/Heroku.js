import React, { Component } from 'react';
import { Table } from 'reactstrap';
import HerokuData from '../Data/HerokuData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      herokuIntro: [],
      herokuPython: [],
    }
  }
  componentDidMount() {
    const herokuArr = [];
    for (let i = 0; i < HerokuData.length; i += 1) {
      if (HerokuData[i].type === "Heroku Intro") {
        herokuArr.push(HerokuData[i]);
      } else if (HerokuData[i].type === "Heroku Python") {
        this.state.herokuPython.push(HerokuData[i]);
      }
    }
    this.setState({ 
      herokuIntro: herokuArr,
    });
  }
  render() {
    const herokuArr = this.state.herokuIntro;
    const herokuPython  = this.state.herokuPython;
    return(
      <div>
        <Navbar />
        <div className="Github-title-container">
          <h1 className="Github-title-item"><b>Heroku Commands</b></h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Heroku Basic Commands</h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th><b>Command</b></th>
                  <th><b>Description</b></th>
                </tr>
              </thead>
              <tbody>
                {herokuArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.command}</th>
                      <th className="Github-command-item">{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Heroku + Python</h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th><b>Command</b></th>
                  <th><b>Description</b></th>
                </tr>
              </thead>
              <tbody>
                {herokuPython.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.command}</th>
                      <th className="Github-command-item">{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <Footer />
      </div>
    );
  }
}