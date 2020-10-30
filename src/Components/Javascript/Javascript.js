import React, { Component } from 'react';
import Concepttable from '../Concepttable/Concepttable';
import JavascriptData from '../../Data/JavascriptData';
import Es6 from '../../Data/Es6';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default class Javascript extends Component {
  constructor() {
    super();
    this.state = {
      javascriptArr : []
    }
  }
  componentDidMount() {
    const functionsArr = [];
    const variablesArr = [];
    const objectsArr = [];
    const scopeArr = [];
    const thisArr = [];
    const esArr = [];

    for (let i = 0; i < JavascriptData.length; i += 1) {
      if (JavascriptData[i].type === "functions") {
        functionsArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "variables") {
        variablesArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "objects") {
        objectsArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "scope") {
        scopeArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "this") {
        thisArr.push(JavascriptData[i]);
      } 
    }
    for (let i = 0; i < Es6.length; i++) {
      esArr.push(Es6[i]);
    }
    let allArr = [
      { arr: functionsArr, title: "Javscript function concepts"},
      { arr: variablesArr, title: "Javscript variable concepts"},
      { arr: objectsArr, title: "Javscript object concepts"},
      { arr: scopeArr, title: "Javscript scope concepts"},
      { arr: thisArr, title: "Javscript this concepts"},
      { arr: esArr, title: "Javscript ES 6 concepts"},
    ]

    this.setState({ 
      javascriptArr: allArr,
    });
  }
  render() {
    const { javascriptArr } = this.state;
    return(
      <div>
        <Concepttable conceptArr={javascriptArr} />
        <Footer />
      </div>
    );
  }
}