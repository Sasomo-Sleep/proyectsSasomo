import http from './base-api-service'

//auth
const singUp = (user) => http.post('/singup', user)
const login = (email, password) => http.post('/login', { email, password })
const logout = () => http.post('/logout')

//panel principal
const profile = () => http.get('/profile')
const getChats = () => http.get('/profile/my-chats')


const service = {
    singUp,
    login,
    logout,
    profile,
    getChats

}

export default service