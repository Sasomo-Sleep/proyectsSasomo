import React, { useEffect, useState } from 'react'
import service from '../services/sasomo-service';
import { useHistory } from 'react-router';

export const AuthContext = React.createContext()

function AuthContextProvider({ children }) {

    const [user, setUser] = useState()
    const history = useHistory()

    useEffect(() => {
        getProfile()
    }, [])

    function login(user) {
        setUser(user)
    }

    function logout() {
        setUser(null)
    }

    function getProfile() {
        service.profile()
            .then((user) => {
                setUser(user)
            })
    }

    const value = {
        user,
        login,
        logout,
        getProfile
    }



    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
