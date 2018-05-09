import React, { Component } from 'react';
import { Table } from 'reactstrap';
import JavascriptData from '../Data/JavascriptData';
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
    return(
      <div>
        <Navbar />
        <div className="Github-title-container">
          <h1 className="Github-title-item"><b>Javascript Jargon and Concepts</b></h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>Javascript Variable Concepts</b></h3>
              <p><b>This page is currently in progress and will be updated in the near future including
                a section for Es6.</b></p>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th><b>Concept</b></th>
                  <th><b>Definition</b></th>
                </tr>
              </thead>
              <tbody>
                {variablesArr.map((post, index) => 
                  (
                    <tr key={post.concept}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
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
                  <th>#</th>
                  <th><b>Concept</b></th>
                  <th><b>Definition</b></th>
                </tr>
              </thead>
              <tbody>
                {functionsArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
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
                  <th>#</th>
                  <th><b>Concept</b></th>
                  <th><b>Definition</b></th>
                </tr>
              </thead>
              <tbody>
                {objectsArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
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
                  <th>#</th>
                  <th><b>Concept</b></th>
                  <th><b>Definition</b></th>
                </tr>
              </thead>
              <tbody>
                {thisArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
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
                  <th>#</th>
                  <th><b>Concept</b></th>
                  <th><b>Definition</b></th>
                </tr>
              </thead>
              <tbody>
                {scopeArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th className="Github-command-item">{post.concept}</th>
                      <th className="Github-command-item">{post.definition}</th>
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