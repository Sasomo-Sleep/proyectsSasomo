const User = require('../../models/user.model')
const Reviews = require('../../models/review.model')

module.exports.profile = (req, res, next) => {

    User.findById(req.params.id)
        .then(profile => res.json(profile))
        .catch(next)
}
