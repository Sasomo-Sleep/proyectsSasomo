import http from './base-api-service'

//auth
const signUp = (user) => http.post('/signUp', user)
const login = (email, password) => http.post('/login', { email, password })
const logout = () => http.post('/logout')

//panel principal
const profile = () => http.get('/profile')

const getChats = () => http.get('/profile/my-chats')
const getChat = (id) => http.get(`/chats/${id}`)
const message = (id, message) => http.post(`/chats/${id}/message`, {message})

const service = {
    signUp,
    login,
    logout,
    profile,
    getChats,
    getChat,
    message

}

export default service