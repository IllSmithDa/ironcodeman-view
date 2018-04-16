import React, { Component } from 'react';
import { Table } from 'reactstrap';
import DjangoData from '../Data/DjangoData';
import Navbar from '../Components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Django extends Component {
  constructor() {
    super();
    this.state = {
      djangoIntro: [],
      djangoDatabase: [],
      djangoShell: [],
      djangoHeroku: [],
    }
  }
  componentDidMount() {
    const djangoArr = [];
    for (let i = 0; i < DjangoData.length; i += 1) {
      if (DjangoData[i].type === "Django Intro") {
        djangoArr.push(DjangoData[i]);
      } else if (DjangoData[i].type === "Django Database") {
        this.state.djangoDatabase.push(DjangoData[i]);
      } else if (DjangoData[i].type === "Django Shell") {
        this.state.djangoShell.push(DjangoData[i]);
      } else if (DjangoData[i].type === "Django Heroku") {
        this.state.djangoHeroku.push(DjangoData[i]);
      }
    }

    this.setState({ 
      djangoIntro: djangoArr,
    });
  }
  render() {
    const djangoArr = this.state.djangoIntro;
    const dataArr = this.state.djangoDatabase;
    const shellArr = this.state.djangoShell;
    const herokuArr = this.state.djangoHeroku;
    return(
      <div>
        <Navbar />
        <div className="Github-title-container">
          <h1>Django</h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Django basic commands</h3>
              <p>Please make sure to install the latest version of Python and use a virutalenvwrapper to set up a environment for 
                Django before running these commands. You can use these documentations if you want to know how to set up a virtual 
                enviroment for Django. <a href="https://virtualenvwrapper.readthedocs.io/en/latest/">
                https://virtualenvwrapper.readthedocs.io/en/latest/</a></p>
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
                {djangoArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th>{post.command}</th>
                      <th>{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Django Database Commands</h3>
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
                {dataArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th>{post.command}</th>
                      <th>{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Django Shell Commands</h3>
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
                {shellArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th>{post.command}</th>
                      <th>{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Django + Heroku Commands</h3>
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
                      <th>{post.command}</th>
                      <th>{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
      </div>
    );
  }
}