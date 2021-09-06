const Booking = require('../../models/booking.model')

module.exports.create = (req, res, next) => {
    Booking.create({ ...req.body, guest: req.user.id })
        .then(booking => res.status(200).json(booking))
        .catch(next)
}

module.exports.list = (req, res, next) => {
    Booking.find({ guest: req.user.id })
        .then(bookings => res.json(bookings))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.booking)
}

module.exports.delete = (req, res, next) => {
    Booking.deleteOne({ _id: req.params.bookingId })
        .then(() => res.status(200).send())
        .catch()
}