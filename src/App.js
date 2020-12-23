import React from 'react';
import Home from './pages/Home'
import Report from './pages/Report'
import Login from './pages/Login'
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/report" component={Report} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
    // <h1>home page</h1>
    // <Router>
    //   <Link to='/'>Home</Link>
    //   <Link to='/report'>Get detailed report</Link>
    //   <Switch>
    //     <Route path='/'>
    //       <Home />
    //     </Route>
    //     <Route path='/report'>
    //       <Report />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
