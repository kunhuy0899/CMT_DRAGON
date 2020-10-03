import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Contener from './conponent/content/contener';
import qt_community from './conponent/content/qt_community';
import forums from './conponent/content/forums';
import account from './conponent/content/account';
import resources from './conponent/content/resources';
ReactDOM.render(
  <div>
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Contener}/>
          <Route path='/qt_community' component={qt_community}/>
          <Route path='/forums' component={forums}/>
          <Route path='/account' component={account}/>
          <Route path='/resources' component={resources}/>
        </Switch>
      </App>
    </Router>

  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
