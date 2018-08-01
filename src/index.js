import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Github from './Components/Gitbhub';
import Heroku from './Components/Heroku';
import Django from './Components/Django';
import Command from './Components/Command';
import Javascript from './Components/Javascript';
import CProgram from './Components/CProgram';


ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/git" component={Github} />
    <Route path="/heroku" component={Heroku} />
    <Route path="/django" component={Django} />
    <Route path="/command" component={Command} />
    <Route path="/javascript" component={Javascript} />
    <Route path="/cprogramming" component={CProgram} />
  </div>
</Router>,
document.getElementById('root'),
);

