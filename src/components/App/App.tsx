import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from '../About/About';
import Login from '../Login/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="*">
            <h3>Такой страницы нет</h3> 
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
// TODO: Реализовать 404 страницу. 