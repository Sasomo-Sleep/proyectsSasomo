import http from './base-api-service'

const singUp = (user) => http.post('/singup', user)

const login = (email, password) => http.post('/login', { email, password })

const logout = () => http.post('/logout')

const profile = (id) => http.get(`/profile/${id}`)


const service = {
    singUp,
    login,
    logout,
    profile,

}

export default service