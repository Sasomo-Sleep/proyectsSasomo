const Review = require('../../models/review.model')
const User = require('../../models/user.model')
const Booking = require('../../models/booking.model')
const Property = require('../../models/property.model')

module.exports.create = (req, res, next) => {
    Property.findById(req.params.propertyId)
        .then(property => {
            return Review.create({...req.body, from: req.user.id, property: req.params.propertyId})
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
