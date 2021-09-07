const Like = require('../../models/like.model')
const Property = require('../../models/property.model')

module.exports.create = (req, res, next) => {

    Like.findOne({ propertyId: req.params.propertyId, userId: req.user.id })
        .then(like => {
            if(!like) {
                const like = new Like({
                    userId: req.user.id,
                    propertyId: req.params.propertyId
                })
                like.save()
                    .then(like => res.status(200).json(like))
            } else {
                return Like.findByIdAndDelete(like.id)
                    .then(() => res.status(200))
            }
        })
        .catch(next)

}

module.exports.propertiesLiked = (req, res, next) => {

    Like.find({ userId: req.user.id })
        .populate('propertyId')
        .populate('userId')
        .then(likes => res.status(200).json(likes))
        .catch(next)
}

/* module.exports.propertiesLiked = (req, res, next) => {

    Like.find({ userId: req.user.id })
        .populate('propertyId')  --------------> falta esto jeje
        .populate('userId')
        .then(properties => {
            properties.map()           
            res.json(properties)
        })
        .catch(next)
} */