import React, { Component } from 'react';
import { Table } from 'reactstrap';
import HerokuData from '../Data/HerokuData';
import Navbar from '../Components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      herokuIntro: [],
    }
  }
  componentDidMount() {
    const herokuArr = [];
    for (let i = 0; i < HerokuData.length; i += 1) {
      if (HerokuData[i].type === "Heroku Intro") {
        herokuArr.push(HerokuData[i]);
      } 
    }

    this.setState({ 
      herokuIntro: herokuArr,
    });
  }
  render() {
    const herokuArr = this.state.herokuIntro;
    return(
      <div>
        <Navbar />
        <div className="Github-title-container">
          <h1>Heroku</h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Heroku basic commands</h3>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th><b>Command</b></th>
                  <th><b>Description</b></th>
                </tr>
              </thead>
              <tbody>
                {herokuArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th>{post.command}</th>
                      <th>{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
      </div>
    );
  }
}