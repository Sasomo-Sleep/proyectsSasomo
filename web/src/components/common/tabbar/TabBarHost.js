import React from 'react'
import { TabBar } from 'antd-mobile';
import { Switch, Route, useHistory } from 'react-router-dom';


function TabBarHost() {

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
            title="I'm a host"
            icon={<div><i className="fas fa-hand-middle-finger"></i></div>
            }
            onPress={() => {history.push('/profile/my-chats')}}
          >
          </TabBar.Item>
         
        </TabBar>
        </div>
    )
}

export default TabBarHost