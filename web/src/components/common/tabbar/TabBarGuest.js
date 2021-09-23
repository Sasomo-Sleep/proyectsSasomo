import React from 'react'
import { TabBar } from 'antd-mobile';
import {  useHistory } from 'react-router-dom';


function TabBarGuest() {

    const history = useHistory()

    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            width: "100%"
        }}>
            <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Search"
            icon={<div><i className="fas fa-search"></i></div>
            }
            onPress={() => {history.push('/search')}}
          >
          </TabBar.Item>
          <TabBar.Item
            title="Favs"
            icon={<div><i className="far fa-heart"></i></div>
            }
            onPress={() => {history.push('/properties-liked')}}
          >
          </TabBar.Item>
          <TabBar.Item
            title="Bookings"
            icon={<div><i className="fas fa-globe-europe"></i></div>
            }
            onPress={() => {history.push('/bookings')}}
          >
          </TabBar.Item>
          <TabBar.Item
            title="Chats"
            icon={<div><i className="far fa-comment"></i></div>
            }
            onPress={() => {history.push('/profile/my-chats')}}
          >
          </TabBar.Item>
          <TabBar.Item
            title="Menu"
            icon={<div><i className="far fa-user-circle"></i></div>
            }
            onPress={() => {history.push('/guest-menu')}}
          >
          </TabBar.Item>
         
        </TabBar>
        </div>
    )
}

export default TabBarGuest