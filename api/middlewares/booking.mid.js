const Booking = require('../models/booking.model')
const createError = require('http-errors')

module.exports.exists = (req, res, next) => {
    const id = req.params.bookingId || req.params.id
    Booking.findById(id)
        .then(booking => {
            if (booking) {
                req.booking = booking
                next()
            } else {
                next(createError(404, 'Booking not exists!'))
            }
        })
        .catch(next)
}