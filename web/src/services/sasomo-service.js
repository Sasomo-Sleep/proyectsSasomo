import http from './base-api-service'

//auth
const signUp = (user) => http.post('/signUp', user)
const login = (email, password) => http.post('/login', { email, password })
const logout = () => http.post('/logout')

//panel principal
const profile = () => http.get('/profile')
const editProfile = () => http.patch('/profile')
const getChats = () => http.get('/profile/my-chats')
const getChat = (id) => http.get(`/chats/${id}`)
const message = (id, message) => http.post(`/chats/${id}/message`, {message})

//booking
const bookingDetail = (id) => http.get(`/host/bookings/${id}`)
const homeFavs = () => http.get('/properties-liked')
const favDetail = (id) => http.get(`/properties/${id}`)

const service = {
    signUp,
    login,
    logout,
    profile,
    getChats,
    getChat,
    message,
    editProfile,
    bookingDetail,
    homeFavs,
    favDetail
}

export default service