import React, { Component } from 'react';
import { Table } from 'reactstrap';
import GitHubData from '../../Data/GitHubData'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Commandtable from '../Commandtable/Commandtable';

export default class Gitcommands extends Component {
  constructor() {
    super();
    this.state = {
      gitIntro: [],
      gitRemote: [],
      gitFetch: [],
      gitDelete: [],
      gitArr: [],
    }
  }
  componentDidMount() {
    const introArr =[];
    const remoteArr = [];
    const fetchArr = [];
    const deleteArr = [];
    
    for (let i = 0; i < GitHubData.length; i += 1) {
      if (GitHubData[i].type === "Git Intro") {
        introArr.push(GitHubData[i]);
      } else if (GitHubData[i].type === "Git Remote") {
        remoteArr.push(GitHubData[i])
      } else if (GitHubData[i].type === "Git Sync") {
        fetchArr.push(GitHubData[i]);
      } else if (GitHubData[i].type === "Git Remove") {
        deleteArr.push(GitHubData[i]);
      }
    }
    let newArr = [
      {arr: introArr, title:'Git Basic Commands'}, 
      {arr: remoteArr, title:'Git Remote Setup commands'}, 
      {arr: fetchArr, title:'Syncing your local project with a Github Repository'}, 
      {arr: deleteArr, title:'Git Delete Commands'}
    ];
    this.setState({ 
      gitArr: newArr
    });
    console.log(newArr)
  }
  render() {
   const { gitArr}  = this.state;

    return(
      <div>
        <Commandtable commandArr={gitArr}/>
        <Footer />
      </div>
    );
  }
}
