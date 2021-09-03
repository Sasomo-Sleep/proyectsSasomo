const User = require('../../models/user.model')
const Property = require('../../models/property.model')

/* POST /properties, isAuthenticated -> 201 property  accep||reject
GET /properties, isAuthenticated -> 200 property
PATCH /properties/:id, isOwner, isAuthenticated-> 200 property
DELETE /properties/:id, isOwner,isAuthenticated -> 204 property */

module.exports.create = (req, res, next) => {
    if (!req.file) {
        delete req.body.images
    } else {                                        //necesario??
        req.body.images = req.file.path
    }
    Property.create({...req.body, owner: req.user.id})
        .then(property => res.status(200).json(property))
        .catch(next)
}

module.exports.list = (req, res, next) => {
    Property.find()
        .then(property => res.json(property))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.property)
}

module.exports.edit = (req, res, next) => {

    const property = req.property
    const data = { name, description, price, maxGuest, images } = req.body

    Object.assign(property, data)
    property.save()
        .then(property => res.json(property))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Property.findOneAndDelete({ _id: req.property.id })
        .then(() => res.status(200).send())
        .catch(next)
}