import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CountingList from '../СountingList/СountingList';
import Login from '../Login/Login';
import { PageNotFound } from '../PageNotFound/PageNotFound';

function App() {

  const [userName, setUserName] = useState<string>('noname');

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact><Login setUserName={setUserName} /></Route>
          <Route path="/counting" exact><CountingList userName={userName} /></Route>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
// TODO: Реализовать 404 страницу. 