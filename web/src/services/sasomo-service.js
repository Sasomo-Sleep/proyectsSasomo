import http from './base-api-service'

//auth
const signUp = (user) => http.post('/signUp', user)
const login = (email, password) => http.post('/login', { email, password })
const logout = () => http.post('/logout')

//profile
const profile = () => http.get('/profile')
const editProfile = (user) => http.patch('/profile/edit', user) 

//chats
const getChats = () => http.get('/profile/my-chats')
const getChat = (id) => http.get(`/chats/${id}`)
const message = (id, message) => http.post(`/chats/${id}/message`, { message })

//properties
const propertyCreate = (property) => http.post('/properties', property)

//booking
const bookingDetail = (id) => http.get(`/host/bookings/${id}`)//host
const homeFavs = () => http.get('/properties-liked')
const favDetail = (id) => http.get(`/properties/${id}`)
const allBokings = () => http.get('/bookings')
const bookDetail = (id) => http.get(`/bookings/${id}`)

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
    favDetail,
    allBokings,
    bookDetail, 
    propertyCreate
}

export default service