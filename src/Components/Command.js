import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CommandData from '../Data/CommandData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
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
          <h1 className="Github-title-item"><b>Command Lines</b></h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Basic Command Lines</b></h3>
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
              <h3><b>Command Lines for moving files and folders with Windows</b></h3>
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
              <h3><b>Command Lines for moving files and folders with Unix, Linux, Cygwin and MinGW</b></h3>
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