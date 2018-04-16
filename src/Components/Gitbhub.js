import React, { Component } from 'react';
import { Table } from 'reactstrap';
import GitHubData from '../Data/GitHubData'
import Navbar from '../Components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      gitIntro: [],
      gitRemote: [],
      gitFetch: [],
      gitDelete: [],
    }
  }
  componentDidMount() {
    const gitArr = [];
    for (let i = 0; i < GitHubData.length; i += 1) {
      if (GitHubData[i].type === "Git Intro") {
        gitArr.push(GitHubData[i]);
      } else if (GitHubData[i].type === "Git Remote") {
        this.state.gitRemote.push(GitHubData[i])
      } else if (GitHubData[i].type === "Git Sync") {
        this.state.gitFetch.push(GitHubData[i]);
      } else if (GitHubData[i].type === "Git Remove") {
        this.state.gitDelete.push(GitHubData[i]);
      }
    }

    this.setState({ 
      gitIntro: gitArr,
    });
  }
  render() {
    const gitIntro = this.state.gitIntro;
    const gitRemote = this.state.gitRemote;
    const gitFetch = this.state.gitFetch;
    const gitDelete = this.state.gitDelete;
    return(
      <div className="Github">
        <Navbar />
        <div className="Github-title-container">
          <h1>Git</h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Git basic commands</h3>
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
                {gitIntro.map((post, index) => 
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
              <h3>Git Remote Setup commands</h3>
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
                {gitRemote.map((post, index) => 
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
              <h3>Syncing your local project with a Github Repository</h3>
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
                {gitFetch.map((post, index) => 
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
              <h3>Git Delete Commands</h3>
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
                {gitDelete.map((post, index) => 
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