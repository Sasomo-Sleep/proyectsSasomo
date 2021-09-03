const Event = require('../../models/event.model')
const User = require('../../models/user.model')

module.exports.create = (req, res, next) => {

    Event.create({ ...req.body, owner: req.user.id })
        .then(event => res.status(200).json(event))
        .catch(next)
}

module.exports.list = (req, res, next) => {

    const { search } = req.query
    const criterial = {}
    if (search) {
        criterial.category = { $in: [search] }
    }
    Event.find(criterial)
        .populate('owner')
        .then(event => res.status(201).json(event))
        .catch(next)
}

