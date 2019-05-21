import React from 'react';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { Switch, Route } from 'react-router-dom';
import Table from './Components/Table/Data';
import Hoc from './Hoc';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/table' component={Hoc(Table)} />
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
