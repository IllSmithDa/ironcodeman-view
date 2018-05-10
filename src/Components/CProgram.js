import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CData from '../Data/CData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';

export default class CProgram extends Component {
  constructor() {
    super();
    this.state = {
      cArr: [],
    }
  }
  componentDidMount() {
    const cProArr = [];
    for (let i = 0; i < CData.length; i += 1) {
      cProArr.push(CData[i]);
    }
    this.setState({ 
      cArr: cProArr,
    });
  }
  render() {
    const cArr = this.state.cArr;
    return(
      <div>
        <Navbar />
        <div className="Github-title-container">
          <h1 className="Github-title-item"><b>C Concepts</b></h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3><b>C Programming Concepts</b></h3>
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
                {cArr.map((post, index) => 
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