import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Github from './Components/Gitbhub';
import Heroku from './Components/Heroku';
import Django from './Components/Django';
import Command from './Components/Command';
import Javascript from './Components/Javascript';
import CProgram from './Components/CProgram';
import Errorpage from './Components/Errorpage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/git" component={Github} />
            <Route path="/heroku" component={Heroku} />
            <Route path="/django" component={Django} />
            <Route path="/command" component={Command} />
            <Route path="/javascript" component={Javascript} />
            <Route path="/cprogramming" component={CProgram} />
            <Route component={Errorpage} />
          </Switch>
        </Router>,
      </div>
    );
  }
}

