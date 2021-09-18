import React, { useContext } from 'react'
import Profile from '../user/Profile';
import { AuthContext } from '../../contexts/AuthContext';
import TabBarGuest from './tabbar/TabBarGuest';
import TabBarHost from './tabbar/TabBarHost';

const LoggedInPage = ({ children }) => {

    const auth = useContext(AuthContext)
    console.log(auth.isGuest)
    return (
        <>
            <div style={{
                width: "100%"
            }}>
            {children}
            </div>
            {auth.isGuest ? <TabBarGuest /> : <TabBarHost />}
        </>
    );
};

export default LoggedInPage;