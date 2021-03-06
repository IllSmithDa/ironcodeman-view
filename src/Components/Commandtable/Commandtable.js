import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import './Commandtable.css';


export default class Commandtable extends Component {

  render() {
    return(
      <div className="command-container">
        <Navbar />
        <div className="comtable-container">
            <div>
              {this.props.commandArr.map((post) => {
                return(
                  <div className="comtable-item">
                    <div className="comtable-header">
                      <h3><b>{post.title}</b></h3>
                    </div>
                      <Table>
                        <thead class="comtable-title">
                          <tr>
                            <th><b>Command</b></th>
                            <th><b>Description</b></th>
                          </tr>
                        </thead>
                        <tbody className='comtable-content'>
                          {post.arr.map((data, index) => 
                            (
                              <tr key={post.description}>
                                <th>{data.command}</th>
                                <th>{data.description}</th>
                              </tr>
                            )
                          )}
                        </tbody>
                        <tbody className='mobile-comtable-content'>
                          {post.arr.map((data, index) => 
                            (
                              <tr key={post.description}>
                                <p><b>Command</b>: {data.command}</p>
                                <p><b>Description</b>: {data.description}</p>
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
