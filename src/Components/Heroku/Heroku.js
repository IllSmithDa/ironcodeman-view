import React, { Component } from 'react';
import Commandtable from '../Commandtable/Commandtable';
import HerokuData from '../../Data/HerokuData';
import Footer from '../Footer/Footer';

export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      herokuIntro: [],
      herokuPython: [],
      herokuArr:[]
    }
  }
  componentDidMount() {
    const herokuIntro = [];
    const herokuPython = [];
    for (let i = 0; i < HerokuData.length; i += 1) {
      if (HerokuData[i].type === "Heroku Intro") {
        herokuIntro.push(HerokuData[i]);
      } else if (HerokuData[i].type === "Heroku Python") {
        herokuPython.push(HerokuData[i]);
      }
    }

    let allArr = [
      {arr: herokuIntro, title: "Heroku Intro"},
      {arr: herokuPython, title: "Heroku Python"}
    ] 

    this.setState({ 
      herokuArr: allArr,
    });
  }
  render() {
    const {herokuArr} = this.state;
    return(
      <div>
        <Commandtable commandArr={herokuArr} />
        <Footer />
      </div>
    );
  }
}