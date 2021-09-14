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
    Property.findById(req.params.propertyId)
        .populate('owner')
        .then(property => res.json(property))
        .catch(next)

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
    console.log('entro')
    const { checkIn, checkOut, location } = req.query
    const criterial = {}

    if (location) {
        criterial.location = location
    }

    const bookingCriterial = 
    Property.find()
        .then(properties => {
            properties.map(property => {
                return Booking.find({
                        checkIn: { $gte: new Date(checkIn), $lt: new Date(checkIn) },
                        checkOut: { $gte: new Date(checkOut), $lt: new Date(checkOut) }, 
                        property: property.id
                    }
                )
                    .then(bookings => {
                        if (bookings) {
                            const filteredProperties = properties.filter((property, i) => {
                                return bookings.some(booking => booking.property !== property.id )
                             })
                             res.json(bookings)
                        } else {
                            next()
                        }
                    })
                    .catch(next)
            })
        })
        .catch(next)
}





