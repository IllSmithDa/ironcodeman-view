import React, { Component } from 'react';
import Commandtable from '../Commandtable/Commandtable';
import DjangoData from '../../Data/DjangoData';
import Footer from '../Footer/Footer';

export default class Django extends Component {
  constructor() {
    super();
    this.state = {
      djangoArr: []
    }
  }
  componentDidMount() {
    const djangoIntro = [];
    const djangoDatabase = [];
    const djangoShell = [];

    for (let i = 0; i < DjangoData.length; i += 1) {
      if (DjangoData[i].type === "Django Intro") {
        djangoIntro.push(DjangoData[i]);
      } else if (DjangoData[i].type === "Django Database") {
        djangoDatabase.push(DjangoData[i]);
      } else if (DjangoData[i].type === "Django Shell") {
        djangoShell.push(DjangoData[i]);
      }
    }
    let allArr = [
      {arr: djangoIntro, title: "Django Intro"},
      {arr: djangoDatabase, title: "Django Database"},
      {arr: djangoShell, title: "Django Shell"},
    ];

    this.setState({ 
      djangoArr: allArr,
    });
  }
  render() {
    const { djangoArr } = this.state; 
    return(
      <div>
        <Commandtable commandArr={ djangoArr } />
        <Footer/>
      </div>
    );
  }
}