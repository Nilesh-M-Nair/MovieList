import React from 'react';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Overview from './pages/Overview'

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/overview/:id' component={Overview} />
        <Switch>
        </Switch>
      </Switch>
      </Router>
      
    </div>
      
  );
}

export default App;