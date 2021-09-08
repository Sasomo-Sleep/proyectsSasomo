import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SingUp from './components/auth/SingUp';
import Login from './components/auth/Login';
import Profile from './components/host/user/Profile';
import Logout from './components/auth/Logout';
import Footer from './components/common/Footer';
import Menu from './components/host/buttons/menu/Menu'
import ChatList from './components/host/buttons/messages/ChatList';

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
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/profile/my-chats" component={ChatList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
