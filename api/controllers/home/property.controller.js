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
    let { checkIn: searchStart, checkOut: searchEnd, location } = req.query
    const criterial = {}

    if (location) {
        criterial.location = location
    }
        searchStart = new Date(searchStart)
        searchEnd = new Date(searchEnd)
        Property.find()
            .populate({
                path: 'bookings',
                match: {
                    $or: [
                        {
                            checkIn: { $lte: searchStart },
                            checkOut: { $gte: searchStart }
                        },
                        {
                            checkIn: { $lte: searchEnd },
                            checkOut: { $gte: searchEnd }
                        },
                        {
                            checkIn: { $lte: searchStart },
                            checkOut: { $gte: searchEnd }
                        }, 
                        {
                            checkIn: { $gte: searchStart },
                            checkOut: { $lte: searchEnd }
                        }
                    ]
                }
            })
            .then(properties => {
                properties = properties.filter(prop => prop.bookings.length === 0)
                res.json(properties)
            })
            .catch(next)
}
    

