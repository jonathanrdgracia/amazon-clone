import React, {useEffect} from 'react';
import './App.css';
import Header from './navigation/Header';
import Home from './navigation/Home';
import {BrowserRouter as Router, Switch,Route,Routes} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase/firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue()

  useEffect(()=>{
    auth
    .onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch({
          type: 'SET_USER',
          user: userAuth,
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

  },[])


  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route path ='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
