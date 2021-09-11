const Booking = require('../../models/booking.model')
const Chat = require('../../models/chat/chat.model')
const Property = require('../../models/property.model')

/* module.exports.create = (req, res, next) => {
    Booking.create({ ...req.body, guest: req.user.id })
        .then(booking => res.status(200).json(booking))
        .catch(next)
}
 */

module.exports.list = (req, res, next) => {
    Booking.find({ guest: req.user.id })
        .populate('guest')
        .populate('propertyOwner')
        .then(bookings => res.json(bookings))
        .catch(next)
}

module.exports.hostDetails = (req, res, next) => {
    Booking.find({ propertyOwner: req.user.id, _id: req.params.bookingId })
        .populate('guest')
        .populate('propertyOwner')
        .then(bookings => res.json(bookings))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.booking)
}

module.exports.delete = (req, res, next) => {
    Booking.deleteOne({ _id: req.params.bookingId })
        .then(() => res.status(200).send())
        .catch()
}

/* module.exports.create = (req, res, next) => {
    Property.findById(req.params.propertyId)
        .then(property => {
            console.log('eee')
            return Booking.findOne()
                .populate('property')
                .then(booking => {
                    if (booking) {
                        res.json(booking)
                    } else {
                        return Booking.create({ ...req.body, guest: req.user.id })
                            .then(booking => {
                                console.log(booking.property.owner, "2")
                                return Chat.create({ users: [booking.guest, booking.property.owner] })
                                    .then(chat => res.json(booking))
                            })
                    }
                })
        })
        .catch(next)
} */





module.exports.create = (req, res, next) => {
    Property.findById(req.params.propertyId)
        .then(property => {
            //TODO: validar que la propiedad no tiene ninguna validacion
            return Booking.create({ propertyOwner: property.owner, ...req.body, guest: req.user.id })
                .then(booking => {
                    return Chat.create({ users: [booking.guest, property.owner] })
                        .then(chat => res.json(booking))
                })
        })
        .catch(next)
}


