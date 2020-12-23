import React from 'react';
import Home from './pages/Home';
import Report from './pages/Report';
import Login from './pages/Login';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path='/report'>
        <Report />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
