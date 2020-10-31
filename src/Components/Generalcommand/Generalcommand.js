import React, { Component } from 'react';
import Commandtable from '../Commandtable/Commandtable';
import CommandData from '../../Data/CommandData';
import Footer from '../Footer/Footer';

export default class Command extends Component {
  constructor() {
    super();
    this.state = {
      commandArr: []
    }
  }
  componentDidMount() {
    const introArr = []
    const linuxArr = [];
    const windowsArr = [];
    for (let i = 0; i < CommandData.length; i += 1) {
      if (CommandData[i].type === "Command Intro") {
        introArr.push(CommandData[i]);
      } else if (CommandData[i].type === "Command File Linux") {
        linuxArr.push(CommandData[i]);
      } else if(CommandData[i].type === "Command File Windows") {
        windowsArr.push(CommandData[i]);
      }
    }
    let allArr= [
      {arr: introArr, title:"Command Intro"},
      {arr: linuxArr, title:"Command File Linux"},
      {arr: windowsArr, title:"Command File Windows"}
    ]
    this.setState({ 
      commandArr: allArr,
    });
  }
  render() {
    const { commandArr } = this.state
    return(
      <div>
        <Commandtable commandArr={commandArr} />
        <Footer />
      </div>
    );
  }
}