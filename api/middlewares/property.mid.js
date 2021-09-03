const createError = require('http-errors')
const Property = require('../models/property.model')

module.exports.exists = (req, res, next) => {
    const id = req.params.propertyId || req.params.id
    Property.findById(id)
        .then(property => {
            if (property) {
                req.property = property;
                next()
            } else {
                next(createError(404, 'Property not found'))
            }
        })
        .catch(next)
}

