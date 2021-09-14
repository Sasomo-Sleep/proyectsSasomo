const User = require('../../models/user.model')
const Property = require('../../models/property.model')
const Booking = require('../../models/booking.model')



module.exports.create = (req, res, next) => {
    console.log(req.file, req.files)

    if (!req.files) {
        delete req.body.images
    } else {
        req.body.images = req.files.map(image => image.path)
    }

    Property.create({ ...req.body, owner: req.user.id })
        .then(property => res.status(200).json(property))
        .catch(next)
}

module.exports.list = (req, res, next) => {
    Property.find({ owner: req.user.id })
        .then(properties => res.json(properties))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.property)
}

module.exports.edit = (req, res, next) => {

    if (!req.files) {
        delete req.body.images
    } else {
        req.body.images = req.files.map(image => image.path)
    }

    const property = req.property
    const data = req.body

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



module.exports.search = (req, res, next) => {

    const { search } = req.query
    const criterial = {}
    if (search) {
        criterial.location = { $in: [search] }
    }
    const filteredProperties = [];

    Property.find(criterial)
        .then(properties => {
            properties.map(property => {
                return Booking.find({
                    checkIn: { $gte: ISODate(checkIn), $lt: ISODate(checkIn) },
                    checkOut: { $gte: ISODate(checkOut), $lt: ISODate(checkOut) },
                    property: property.id
                })
                    .then(bookings => {
                        if (booking.length == 0) {
                            propertiesFiltered.push(property)
                        } else {
                            next()
                        }
                    })
            })
        })
        .catch(next)
}





