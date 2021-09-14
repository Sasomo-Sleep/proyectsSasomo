import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Profile from './components/user/Profile'
import Logout from './components/auth/Logout';
import Footer from './components/common/footer1/Footer'
import Menu from './components/host/buttons/menu/Menu'
import ChatList from './components/host/buttons/messages/ChatList';
import ChatDetail from './components/host/buttons/messages/ChatDetail';
import SignUp from './components/auth/SingUp';
import Today from './components/host/buttons/today/Today';
import Detail from './components/host/buttons/today/Detail';
import Footer2 from './components/common/footer2/Footer2';

function App() {
  return (
    <div className="container">
      <Switch>
        {/* auth */}
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        {/* profile  HOST*/}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/profile/my-chats" component={ChatList} />
        <Route exact path="/chats/:id" component={ChatDetail} />
        <Route exact path="/today" component={Today} />
        <Route exact path="/detail/:id" component={Detail} />

      </Switch>
      {/* <Footer /> */}

      <Footer2 />
    </div>
  );
}

export default App;
