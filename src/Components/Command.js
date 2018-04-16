import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CommandData from '../Data/CommandData';
import Navbar from '../Components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Command extends Component {
  constructor() {
    super();
    this.state = {
      commandIntro: [],
      commandlinux: [],
      commandWindow: [],
    }
  }
  componentDidMount() {
    const commandArr = [];
    for (let i = 0; i < CommandData.length; i += 1) {
      if (CommandData[i].type === "Command Intro") {
        commandArr.push(CommandData[i]);
      } else if (CommandData[i].type === "Command File Linux") {
        this.state.commandlinux.push(CommandData[i]);
      } else if(CommandData[i].type === "Command File Windows") {
        this.state.commandWindow.push(CommandData[i]);
      }
    }
    this.setState({ 
      commandIntro: commandArr,
    });
  }
  render() {
    const commandIntro = this.state.commandIntro;
    const commandlinux = this.state.commandlinux;
    const commandWindow = this.state.commandWindow;
    return(
      <div>
        <Navbar />  
        <div className="Github-title-container">
          <h1>Basic Command Lines</h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3> Basic Command Lines</h3>
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
                {commandIntro.map((post, index) => 
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
              <h3>Command Lines for moving files and folders with Windows</h3>
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
                {commandWindow.map((post, index) => 
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
              <h3>Command Lines for moving files and folders with Unix/Linix</h3>
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
                {commandlinux.map((post, index) => 
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