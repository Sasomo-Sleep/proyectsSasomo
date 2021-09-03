const createError = require('http-errors')
const User = require('../../models/user.model')
const passport = require('passport')

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
                    .then(user => res.status(200).json(user))
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
    if (req.params.id === "me")
        return res.json(req.user)

    User.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).send())
        .catch(next)
}

module.exports.update = (req, res, next) => {
    const id = req.params.id
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then(user => res.status(202).json(user))
        .catch(next)
}

module.exports.logout = (req, res, next) => {
    req.logout()
    res.status(200).end()
}