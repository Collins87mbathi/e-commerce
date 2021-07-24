import React from 'react'
import {BrowserRouter as  Router,Switch,Route } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'
import './Style.css';

const App = () => {
  return (
  <Router>
    <Header/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/cart'><Cart/></Route>

    </Switch>
  </Router>
  )
}

export default App
