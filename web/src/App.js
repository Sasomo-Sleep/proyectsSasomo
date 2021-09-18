import React, { useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './components/auth/Login';
import Profile from './components/user/Profile'
import Logout from './components/auth/Logout';
/* import Footer from './components/common/footer1/Footer' */
import Menu from './components/host/buttons/menu/Menu'
import ChatList from './components/host/buttons/messages/ChatList';
import ChatDetail from './components/host/buttons/messages/ChatDetail';
import SignUp from './components/auth/SingUp';
import Today from './components/host/buttons/today/Today';
import Detail from './components/host/buttons/today/DetailFav';
import Footer from './components/common/footer1/Footer'
import Footer2 from './components/common/footer2/Footer2';
import MenuGuest from './components/guest/menu/MenuGuest';
import HomesFavs from './components/guest/favs/HomesFavs';
import DetailFav from './components/guest/favs/DetailFav';
import BookingsList from './components/guest/bookings/BookingsList';
import BookingDetail from './components/guest/bookings/BookingDetail';
import Explorer from './components/guest/explorer/Explorer';
import EditProfile from './components/user/EditProfile';
import PropertyForm from './components/host/property/PropertyForm';
import 'antd-mobile/dist/antd-mobile.css'
import TabBarHost from "./components/common/tabbar/TabBarHost"
import { TabBar } from 'antd-mobile';
import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import { AuthContext } from './contexts/AuthContext';
function App() {
  
  const auth = useContext(AuthContext)
  const history = useHistory()

  return (
    <div className="vh-100 vw-100" >
      <Switch>
        {/* auth */}
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        {/* profile  HOST*/}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/profile/my-chats" component={ChatList} />
        <Route exact path="/chats/:id" component={ChatDetail} />
        <Route exact path="/today" component={Today} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/guest-menu" component={MenuGuest} />

        {/*  FAVS */}
        <Route exact path="/properties-liked" component={HomesFavs} />
        <Route exact path="/properties/:id" component={DetailFav} />

        {/* BOOKINGS */}
        <Route exact path="/bookings" component={BookingsList} />
        <Route exact path="/bookings/:id" component={BookingDetail} />
        <Route exact path="/search" component={Explorer} />
        <Route exact path="/properties" component={PropertyForm} />
      </Switch>
    </div>
  );
}

export default App;
