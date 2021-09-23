import http from './base-api-service'

//auth
const signUp = (user) => http.post('/signUp', user)
const login = (email, password) => http.post('/login', { email, password })
const logout = () => http.post('/logout')

//profile
const profile = () => http.get('/profile')
const editProfile = (user) => {

    const data = new FormData()
    data.append('avatar', user.avatar[0])
    data.append('about', user.about)
    data.append('city', user.city)
    return http.patch('/profile', data)
}



//chats
const getChats = () => http.get('/profile/my-chats')
const getChat = (id) => http.get(`/chats/${id}`)
const message = (id, message) => http.post(`/chats/${id}/message`, { message })

//properties
const propertyCreate = (property) => http.post('/properties', property)
const propertiesSearched = (filter) => http.get('/properties/search', {params: {...filter}})
//booking
const bookingDetail = (id) => http.get(`/host/bookings/${id}`)//host
const homeFavs = () => http.get('/properties-liked')
const favDetail = (id) => http.get(`/properties/${id}`)
const allBokings = () => http.get('/bookings')
const bookDetail = (id) => http.get(`/bookings/${id}`)
const bookingCreate = (id) => http.post(`/properties/${id}/bookings`)

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
    propertyCreate,
    propertiesSearched,
    bookingCreate
}

export default service