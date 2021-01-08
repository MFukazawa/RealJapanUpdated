import React from 'react';
import Home from './pages/Home';
import Report from './pages/Report';
import Login from './pages/Login';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
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

  updateSignInStatus = () => {
    this.setState(prevState => ({
      isSignedIn: !prevState.isSignedIn
    }))
  }


  render() {
    return (
      <Switch>
        <Route path='/report'>
          <Report />
        </Route>
        <Route path='/login'>
          {/* add props to login route if i want to keep state in the App */}
          <Login loadUser={this.loadUser} updateSignInStatus={this.updateSignInStatus} onRouteChange={this.onRouteChange} />
        </Route>
        <Route exact path='/'>
          <Home
            updateSignInStatus={this.updateSignInStatus}
            isSignedIn={this.state.isSignedIn}
            email={this.state.user.email}
          />
        </Route>
      </Switch>
    );
  }
}

export default App;
