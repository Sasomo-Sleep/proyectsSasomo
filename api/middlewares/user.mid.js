const { serializeUser } = require('passport')
const User = require('../models/user.model')

module.exports.exists = (req, res, next) => {
    const id = req.params.profileId || req.params.id
    User.findById(id)
        .then(user => {
            if (user) {
                req.user = user
                next()
            } else {
                next(createError(404, 'user not exists!'))
            }
        })
        .catch(next)
}