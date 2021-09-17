const express = require('express');
const passport = require('passport');
const secure = require('../middlewares/secure.mid')
const property = require('../middlewares/property.mid')
const booking = require('../middlewares/booking.mid')
const auth = require('../controllers/user/auth.controller')
const event = require('../middlewares/event.mid')
const upload = require('../config/multer.config')

const properties = require('../controllers/home/property.controller')
const bookings = require('../controllers/home/booking.controller')
const reviews = require('../controllers/review/review.controller')
const likes = require('../controllers/like/like.controller')
const chat = require('../controllers/chat/chat.controller')
const events = require('../controllers/event/event.controller')

const router = express.Router();

//auth
router.post('/signup', auth.create)
router.post('/login', auth.login)
router.post('/logout', secure.isAuthenticated, auth.logout)

//user
router.get('/profile', secure.isAuthenticated, auth.get)
router.patch('/profile', secure.isAuthenticated, upload.single('avatar'), auth.update)
router.delete('/profile', secure.isAuthenticated, auth.delete)

//property
router.post('/properties', upload.array('images'), secure.isAuthenticated, properties.create) //no puedo cambiar imagenes desde postman, purqueeee? :()
router.get('/properties', secure.isAuthenticated, properties.list)
router.get('/properties/search', secure.isAuthenticated, properties.search) 
router.get('/properties/:propertyId', secure.isAuthenticated, property.exists, properties.detail)
router.patch('/properties/:propertyId', secure.isAuthenticated, property.exists, upload.array('images'), properties.edit)
router.delete('/properties/:propertyId', secure.isAuthenticated, property.exists, properties.delete)

//------> hay que probarlo jeje
//router.get('/properties/search')
//Booking
router.post('/properties/:propertyId/bookings', secure.isAuthenticated, bookings.create)
router.get('/bookings', secure.isAuthenticated, bookings.listmines)//guest
router.get('/bookings/:bookingId', secure.isAuthenticated, bookings.detail)
router.delete('/bookings/:bookingId', secure.isAuthenticated, booking.exists, bookings.delete)
router.get('/host/bookings/:bookingId', secure.isAuthenticated, booking.exists, bookings.hostDetails)//host

//Reviews
router.post('/bookings/:bookingId/reviews', secure.isAuthenticated, booking.exists, reviews.create)
router.get('/reviews', secure.isAuthenticated, reviews.list)
router.delete('/reviews/:reviewId', secure.isAuthenticated, reviews.delete)

//Likes 
router.post('/properties/:propertyId/like', secure.isAuthenticated, likes.create)
router.get('/properties-liked', secure.isAuthenticated, likes.propertiesLiked)

//Chat
//router.post('/bookings/:bookingId/chats', secure.isAuthenticated, chat.create)
//router.get('/bookings/:bookingId/chats/:id', secure.isAuthenticated, chat.getChat)
router.post('/chats/:id/message', secure.isAuthenticated, chat.newMessage)
router.get('/chats/:id', secure.isAuthenticated, chat.getChat)

//router.get('/bookings/:bookingId/my-messages', secure.isAuthenticated, chat.getAll)
//router.get('/chats/:id', secure.isAuthenticated, chat.getChat)
router.get('/profile/my-chats', secure.isAuthenticated, chat.getAll)
//router.get('/users/me/chats')

//Event
router.post('/events', secure.isAuthenticated, upload.single('image'), events.create)
router.get('/events', secure.isAuthenticated, events.list)


module.exports = router;
