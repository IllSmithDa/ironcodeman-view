import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Homepage from './Components/Homepage/Homepage'
import Gitcommands from './Components/Gitcommands/Gitcommands';
import Heroku from './Components/Heroku/Heroku';
import Django from './Components/Django/Django';
import Generalcommand from './Components/Generalcommand/Generalcommand';
import Javascript from './Components/Javascript/Javascript';
import CProgram from './Components/CProgram/CProgram';
import Errorpage from './Components/Errorpage/Errorpage';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/git" component={Gitcommands} />
        <Route path="/heroku" component={Heroku} />
        <Route path="/django" component={Django} />
        <Route path="/command" component={Generalcommand} />
        <Route path="/javascript" component={Javascript} />
        <Route path="/cprogramming" component={CProgram} />
        <Route component={Errorpage} />
      </Switch>
    </Router>
  );
}

