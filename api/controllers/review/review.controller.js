const Review = require('../../models/review.model')
const User = require('../../models/user.model')
const Booking = require('../../models/booking.model')

module.exports.create = (req, res, next) => {
    Booking.findById(req.params.bookingId)
        .then(booking => {
            return Review.create(req.body)
                .then(review => res.json(review))
        })
        .catch(next)
}


module.exports.list = (req, res, next) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Review.findByIdAndDelete(req.params.reviewId)
        .then(() => res.status(200).end())
        .catch(next)
}
