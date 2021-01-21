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
      // remove isSignedIn - replace with user.email.length > 0
      // isSignedIn: false,
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

  // updateSignInStatus = () => {
  //   this.setState(prevState => ({
  //     isSignedIn: !prevState.isSignedIn
  //   }))
  // }

  resetUser = () => {
    console.log('this is reset user');
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
          {/* add props to login route if i want to keep state in the App */}
          {/* <Login loadUser={this.loadUser} updateSignInStatus={this.updateSignInStatus} onRouteChange={this.onRouteChange} /> */}
          <Login loadUser={this.loadUser} email={this.state.user.email} onRouteChange={this.onRouteChange} />
        </Route>
        <Route path='/register'>
          <Register loadUser={this.loadUser} email={this.state.user.email} onRouteChange={this.onRouteChange} />
        </Route>
        <Route exact path='/'>
          <Home
            // isSignedIn={this.state.isSignedIn}
            email={this.state.user.email}
            resetUser={this.resetUser}
          />
        </Route>
      </Switch>
    );
  }
}

export default App;
