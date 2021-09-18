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
          barTintColor="black"
        >
          <TabBar.Item
            title="Today"
            icon={<div><i className="fas fa-home"></i></div>
            }
            onPress={() => {history.push('/today')}}
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
            title="Calendar"
            icon={<div><i className="far fa-heart"></i></div>
            }
            onPress={() => {history.push('')}}
          >
          </TabBar.Item>
          <TabBar.Item
            title="Information"
            icon={<div><i className="fas fa-globe-europe"></i></div>
            }
            onPress={() => {history.push('')}}
          >
          </TabBar.Item>
          <TabBar.Item
            title="Menu"
            icon={<div><i className="fas fa-grip-lines"></i></div>
            }
            onPress={() => {history.push('/menu')}}
          >
          </TabBar.Item>
         
        </TabBar>
        </div>
    )
}

export default TabBarHost