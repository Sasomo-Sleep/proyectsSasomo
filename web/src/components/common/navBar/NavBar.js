import { NavBar, Icon } from 'antd-mobile';


import React from 'react';
import { useHistory } from 'react-router-dom';

const Tasteing = () => {
    const history = useHistory()
    return (
        <div>
            <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push('/profile/my-chats')}
                >Chating with <i className="far fa-comment-alt"/> 
                </NavBar>
        </div>
    );
};

export default Tasteing;

