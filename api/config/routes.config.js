const express = require('express');
const passport = require('passport');
const secure = require('../middlewares/secure.mid')
const property = require('../middlewares/property.mid')
const booking = require('../middlewares/booking.mid')
const auth = require('../controllers/people/auth.controller')
const event = require('../middlewares/event.mid')
const upload = require('../config/multer.config')

const properties = require('../controllers/home/property.controller')
const bookings = require('../controllers/home/booking.controller')
const reviews = require('../controllers/review/review.controller')
const chat = require('../controllers/chat/chat.controller')
const events = require('../controllers/event/event.controller')

const router = express.Router();

//auth
router.post('/profile', auth.create)
router.post('/login', auth.login)
router.delete('/profile/:id', secure.isAuthenticated, auth.delete)
router.post('/logout', secure.isAuthenticated, auth.logout)

//user
router.get('/profile/:id', secure.isAuthenticated, auth.get)
router.patch('/profile/:id', secure.isAuthenticated, upload.single('avatar'), auth.update)

//property
router.post('/properties', upload.array('images'), secure.isAuthenticated, properties.create) //no puedo cambiar imagenes desde postman, purqueeee? :()
router.get('/properties', secure.isAuthenticated, properties.list)
router.get('/properties/:propertyId', secure.isAuthenticated, property.exists, properties.detail)
router.patch('/properties/:propertyId', secure.isAuthenticated, property.exists, upload.array('images'), properties.edit)
router.delete('/properties/:propertyId', secure.isAuthenticated, property.exists, properties.delete)

//Booking
router.post('/bookings', secure.isAuthenticated, bookings.create)
router.get('/bookings', secure.isAuthenticated, bookings.list)
router.get('/bookings/:bookingId', secure.isAuthenticated, booking.exists, bookings.detail)
router.delete('/bookings/:bookingId', secure.isAuthenticated, booking.exists, bookings.delete)

//Reviews
router.post('/bookings/:bookingId/reviews', secure.isAuthenticated, booking.exists, reviews.create)
router.get('/reviews', secure.isAuthenticated, reviews.list)
router.delete('/reviews/:reviewId', secure.isAuthenticated, reviews.delete)

//Chat
router.post('/bookings/:bookingId/chat', secure.isAuthenticated, chat.create)
router.get('/bookings/:bookingId/chat/:id', secure.isAuthenticated, chat.getChat)
router.post('/bookings/:bookingId/chat/:id/message', secure.isAuthenticated, chat.newMessage)
router.get('/bookings/:bookingId/my-messages', secure.isAuthenticated, chat.getAll)

//Event
router.post('/events', secure.isAuthenticated, upload.single('image'), events.create)
router.get('/events', secure.isAuthenticated, events.list)


module.exports = router;
