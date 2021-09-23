const Booking = require('../../models/booking.model')
const Chat = require('../../models/chat/chat.model')
const Property = require('../../models/property.model')

module.exports.create = (req, res, next) => {
    if (!booking) {
        Booking.create({ ...req.body, guest: req.user.id })
            .then(booking => res.status(200).json(booking))
            .catch(next)
    } else {
        next()
    }
}


module.exports.listmines = (req, res, next) => {
    Booking.find({ guest: req.user.id })
        .populate('guest')
        .populate({
            path: 'propertyOwner',
            populate: {
                path: 'properties',
            }
        })
        .then(bookings => res.json(bookings))
        .catch(next)
}

module.exports.hostDetails = (req, res, next) => {
    Booking.find({ propertyOwner: req.user.id, _id: req.params.bookingId })
        .populate('guest')
        .populate('propertyOwner')
        .populate('property')
        /*  .populate({
             path: 'properties',
             populate: {  //no  va
                 path: 'property',
                 select: ' price'
             }
         }) */
        .then(bookings => res.json(bookings))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Booking.findById(req.params.bookingId)
        .populate('guest')
        .populate({
            path: 'propertyOwner',
            populate: {
                path: 'properties',
            }
        })
        .then(booking => res.json(booking))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Booking.deleteOne({ _id: req.params.bookingId })
        .then(() => res.status(200).send())
        .catch()
}




module.exports.create = (req, res, next) => {
    Property.findById(req.params.propertyId)
        .then(property => {
            return Booking.create({ propertyOwner: property.owner, ...req.body, guest: req.user.id })
                .then(booking => {
                    return Chat.create({ users: [booking.guest, property.owner] })
                        .then(chat => res.json(booking))
                })
        })
        .catch(next)
}

