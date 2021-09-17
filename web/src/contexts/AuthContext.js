import React, { useEffect, useState } from 'react'
import service from '../services/sasomo-service';
import { useHistory } from 'react-router';

export const AuthContext = React.createContext()

function AuthContextProvider({ children }) {
    
    const [user, setUser] = useState()
    const [isGuest, setGuest] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const userId = localStorage.getItem('user')
        if (userId) {
            getProfile()
        }
    }, [])

    function login(email, password) {
        service.login(email, password)
            .then(user => {
                getProfile()
                localStorage.setItem('user', user.id)
                setUser(user)
                history.push('/profile')
            })
            .catch(err => console.error(err))
    }

    function logout() {
        localStorage.removeItem('user')
        setUser(null)
        history.push('/login')
    }

    function getProfile() {
        service.profile()
            .then((user) => {
                setUser(user)
            })
    }

    const value = {
        user,
        isGuest,
        setGuest,
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