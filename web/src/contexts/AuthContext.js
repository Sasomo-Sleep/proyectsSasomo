import React, { useEffect, useState } from 'react'
import service from '../services/sasomo-service';
import { useHistory } from 'react-router';

export const AuthContext = React.createContext()

function AuthContextProvider({ children }) {

    const [user, setUser] = useState()
    const history = useHistory()

    useEffect(() => {
        service.profile('me')
            .then((user) => {
                setUser(user)
            })
    }, [])

    function login(user) {
        console.log(user.id)
        setUser(user)
    }

    function logout() {
        setUser(null)
    }

    const value = {
        user,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
