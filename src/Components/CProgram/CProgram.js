import React, { Component } from 'react';
import Concepttable from '../Concepttable/Concepttable';
import CData from '../../Data/CData';
import Footer from '../Footer/Footer';

export default class CProgram extends Component {
  constructor() {
    super();
    this.state = {
      cArr: [],
    }
  }
  componentDidMount() {
    const cProArr =[];

    for (let i = 0; i < CData.length; i += 1) {
      cProArr.push(CData[i]);
    }

    let allArr = [
      {arr: cProArr, title: "C Concepts"}
    ]

    this.setState({ 
      cArr: allArr,
    });
  }
  render() {
    const { cArr } = this.state;
    return(
      <div>
        <Concepttable conceptArr={cArr} />
        <Footer />
      </div>
    );
  }
}