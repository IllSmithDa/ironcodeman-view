import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Concepttable.css';


export default class Commandtable extends Component {

  render() {
    return(
      <div className="concept-container">
        <Navbar />
        <div className="contable-container">
            <div>
              {this.props.conceptArr.map((post) => {
                return(
                  <div className="contable-item">
                    <div className="contable-header">
                      <h3><b>{post.title}</b></h3>
                    </div>
                      <Table>
                        <thead class="contable-title">
                          <tr>
                            <th><b>Concept</b></th>
                            <th><b>Description</b></th>
                            <th><b>Example</b></th>
                          </tr>
                        </thead>
                        <tbody className='contable-content'>
                          {post.arr.map((data, index) => 
                            (
                              <tr key={post.description}>
                                <th>{data.concept}</th>
                                <th>{data.definition}</th>
                                <th><textarea disabled>{data.example}</textarea></th>
                              </tr>
                            )
                          )}
                        </tbody>
                        <tbody className='mobile-contable-content'>
                          {post.arr.map((data, index) => 
                            (
                              <tr key={post.description}>
                                <p><b>Concept</b>: {data.concept}</p>
                                <p><b>Definition</b>: {data.definition}</p>
                                <p><b>Example</b>:</p><textarea disabled>{data.example}</textarea>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                  </div>
                  
                );
              })}

            </div>
        </div>
      </div>
    );
  }
}
