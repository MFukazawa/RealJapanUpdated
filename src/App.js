import React from 'react';
import Home from './pages/Home';
import Report from './pages/Report';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: '',
        email: '',
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      email: data.email,
      joined: data.joined
    }})
  }

  resetUser = () => {
    this.setState({ user: {
      id: '',
      email: '',
      joined: ''
    }})
  }


  render() {
    return (
      <Switch>
        <Route path='/report'>
          <Report />
        </Route>
        <Route path='/login'>
          <Login loadUser={this.loadUser} email={this.state.user.email} onRouteChange={this.onRouteChange} />
        </Route>
        <Route path='/register'>
          <Register loadUser={this.loadUser} email={this.state.user.email} onRouteChange={this.onRouteChange} />
        </Route>
        <Route exact path='/'>
          <Home
            email={this.state.user.email}
            resetUser={this.resetUser}
          />
        </Route>
      </Switch>
    );
  }
}

export default App;
