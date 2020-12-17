import React, { useEffect } from 'react';
import Home from './components/Home'
import Report from './components/Report'
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'
// import { app } from './styles/app.module.css'

function App() {
  useEffect(() => {
    fetch('http://localhost:9027')
      .then((res) => res.json())
      .then(console.log);
  });

  return (
    <Switch>
      <Route path="/report" component={Report} />
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
