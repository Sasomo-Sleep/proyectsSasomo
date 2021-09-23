const Like = require('../../models/like.model')
const Property = require('../../models/property.model')

module.exports.create = (req, res, next) => {

    Like.create({ userId: req.user.id,propertyId: req.params.propertyId })
        .then(like => res.json(like))
        .catch(next)
}

module.exports.propertiesLiked = (req, res, next) => {

    Like.find({ userId: req.user.id })
        .populate({
            path: 'propertyId',
            populate: {
                path: 'owner'
            }
        })
        .then(likes => res.status(200).json(likes))
        .catch(next)
}

module.exports.likeOne = (req, res, next) => {
    Like.find({propertyId: req.params.propertyId, userId: req.user.id})
        .then(like => res.json(like))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Like.findOneAndDelete({propertyId: req.params.propertyId, userId: req.user.id})
        .then(() => res.status(200).send())
        .catch(next)
}
