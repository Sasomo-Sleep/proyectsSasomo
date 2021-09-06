import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SingUp from './components/auth/SingUp';
import Login from './components/auth/Login';
import Profile from './components/user/Profile';
import Logout from './components/auth/Logout';


function App() {
  return (
    <div className="container">
      <Switch>
        {/* auth */}
        <Route exact path="/singup" component={SingUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        {/* profile */}
        <Route exact path="/profile" component={Profile} />

      </Switch>
    </div>
  );
}

export default App;
