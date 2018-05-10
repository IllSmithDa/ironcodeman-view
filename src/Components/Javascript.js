import React, { Component } from 'react';
import { Table } from 'reactstrap';
import JavascriptData from '../Data/JavascriptData';
import Es6 from '../Data/Es6';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Javascript extends Component {
  constructor() {
    super();
    this.state = {
      functionsArr: [],
      variablesArr: [],
      objectsArr: [],
      scopeArr: [],
      thisArr: [],
      esArr:[]
    }
  }
  componentDidMount() {
    const javascriptArr = [];
    for (let i = 0; i < JavascriptData.length; i += 1) {
      if (JavascriptData[i].type === "functions") {
        javascriptArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "variables") {
        this.state.variablesArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "objects") {
        this.state.objectsArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "scope") {
        this.state.scopeArr.push(JavascriptData[i]);
      } else if (JavascriptData[i].type === "this") {
        this.state.thisArr.push(JavascriptData[i]);
      } 
    }
    for (let i = 0; i < Es6.length; i++) {
      this.state.esArr.push(Es6[i]);
    }
    this.setState({ 
      functionsArr: javascriptArr,
    });
  }
  render() {
    const variablesArr = this.state.variablesArr;
    const functionsArr  = this.state.functionsArr;
    const objectsArr  = this.state.objectsArr;
    const thisArr  = this.state.thisArr;
    const scopeArr = this.state.scopeArr;
    const esArr = this.state.esArr;
    return(
      <div>
        <Navbar />
        <div className="Github-title-container">
          <h1 className="Github-title-item"><b>Javascript Jargon and Concepts</b></h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javascript Variable Concepts</b></h3>
              <p><b>This page is currently in progress and will be updated.</b></p>
            </div>
            <Table>
              <thead>
                <tr>
                  <th className="Github-section-header">#</th>
                  <th ><b>Concept</b></th>
                  <th><b>Definition</b></th>
                  <th><b>Example(s)</b></th>
                </tr>
              </thead>
              <tbody>
                {variablesArr.map((post, index) => 
                  (
                    <tr key={post.concept}>
                      <th className="Github-section-header" scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
                      <textarea disabled className="Github-example-item">{post.example}</textarea>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javscript function concepts</b></h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th className="Github-section-header">#</th>
                  <th className="Github-section-header"><b>Concept</b></th>
                  <th className="Github-section-header"><b>Definition</b></th>
                  <th className="Github-section-header"><b>Example(s)</b></th>
                </tr>
              </thead>
              <tbody>
                {functionsArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th className="Github-section-header" scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
                      <textarea disabled className="Github-example-item">{post.example}</textarea>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javscript object concepts</b></h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th className="Github-section-header">#</th>
                  <th className="Github-section-header"><b>Concept</b></th>
                  <th className="Github-section-header"><b>Definition</b></th>
                  <th className="Github-section-header"><b>Example(s)</b></th>
                </tr>
              </thead>
              <tbody>
                {objectsArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th className="Github-section-header" scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
                      <textarea disabled className="Github-example-item">{post.example}</textarea>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javscript 'this' concepts</b></h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th className="Github-section-header">#</th>
                  <th className="Github-section-header"><b>Concept</b></th>
                  <th className="Github-section-header"><b>Definition</b></th>
                  <th className="Github-section-header"><b>Example(s)</b></th>
                </tr>
              </thead>
              <tbody>
                {thisArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th className="Github-section-header" scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
                      <textarea disabled className="Github-example-item">{post.example}</textarea>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javscript scope concepts</b></h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th className="Github-section-header">#</th>
                  <th className="Github-section-header"><b>Concept</b></th>
                  <th className="Github-section-header"><b>Definition</b></th>
                  <th className="Github-section-header"><b>Example(s)</b></th>
                </tr>
              </thead>
              <tbody>
                {scopeArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th className="Github-section-header" scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
                      <textarea disabled className="Github-example-item">{post.example}</textarea>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javscript Es6 concepts</b></h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th className="Github-section-header">#</th>
                  <th className="Github-section-header"><b>Concept</b></th>
                  <th className="Github-section-header"><b>Definition</b></th>
                  <th className="Github-section-header"><b>Example(s)</b></th>
                </tr>
              </thead>
              <tbody>
                {esArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th className="Github-section-header" scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
                      <textarea disabled className="Github-example-item">{post.example}</textarea>
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