import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Github from './Components/Gitbhub';
import Heroku from './Components/Heroku';
import Django from './Components/Django';
import Command from './Components/Command';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="https://ironcodeman.herokuapp.com/" component={App} />
    <Route path="https://ironcodeman.herokuapp.com/git" component={Github} />
    <Route path="https://ironcodeman.herokuapp.com/heroku" component={Heroku} />
    <Route path="https://ironcodeman.herokuapp.com/django" component={Django} />
    <Route path="https://ironcodeman.herokuapp.com/command" component={Command} />
  </div>
</Router>,
document.getElementById('root'),
);
registerServiceWorker();
