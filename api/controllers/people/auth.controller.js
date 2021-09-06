const createError = require('http-errors')
const User = require('../../models/user.model')
const passport = require('passport')
const Property = require('../../models/property.model')
const Booking = require('../../models/booking.model')
module.exports.create = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                next(createError(400, { errors: { email: "Email is already exists" } }))
            } else {
                return User.create({
                    ...req.body,
                    avatar: req?.file?.path
                })
                    .then(user => res.status(201).json(user))
            }
        })
        .catch(next)
}

module.exports.login = (req, res, next) => {
    passport.authenticate('local-auth', (error, user, validations) => {
        if (error) {
            next(error)
        } else if (!user) {
            next(createError(400, { errors: validations }))
        } else {
            req.login(user, error => {
                if (error) next(error)
                else res.json(user)
            })
        }
    })(req, res, next)
}

module.exports.get = (req, res, next) => {
    
    Property.find({ owner: req.user.id })
        .then(properties => res.status(200).json({
            profile: req.user,
            properties
        }))
        .catch(next)
    Booking.find({ })
    
}

module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).send())
        .catch(next)
}

module.exports.update = (req, res, next) => {
    const id = req.user.id
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then(user => res.status(202).json(user))
        .catch(next)
}

module.exports.logout = (req, res, next) => {
    req.logout()
    res.status(200).end()
}