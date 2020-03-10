import React from 'react';
import './App.css';
import Login from './components/Login/Login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
