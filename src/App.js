import React from 'react';
import Home from './pages/Home'
import Report from './pages/Report'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/report" component={Report} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
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
