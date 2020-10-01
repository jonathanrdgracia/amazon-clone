import React from 'react';
import './App.css';
import Header from './navigation/Header';
import Home from './navigation/Home';
import {BrowserRouter as Router, Switch,Route,Routes} from 'react-router-dom'
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
