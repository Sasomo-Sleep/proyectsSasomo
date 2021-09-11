const User = require('../../models/user.model')
const Property = require('../../models/property.model')



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
            criterial.category = { $in: [search] }
        }
        Property.find(criterial)
            .populate('owner')
            .then(event => res.status(201).json(event))
            .catch(next)
}

/* { location, start, end }

location = "NY"
start = 11/9
end = 15/9 */

// Quieres quedarte en la calle 20
/* bookings = [Maria del 11 al 15 en NY en la calle 3, Edgar del 11 al 15 en NY en la calle 24, Nacho del 11 al 15 en NY la calle 20]

for property in properties
  if property.city == location:
    // si hay un booking de esta propiedad entre start y end, no me devuelvas la propiedad.
    bookings.find({ start: start, end: end,  })



properties = [Calle 1 LA, Calle 2 Paris, Calle 3 NY, Calle 4 NY]


bookings = [Nacho en la Calle 1 LA (3-5), Booking 18djcjw8dye8dj: Juan en la Calle 3 NY (3-7), Maria en la calle 4 de NY (5-10)]


FORM = NY 8-9


filtered_properties = []
for property in properties:
    if property.city == "NY":
        filteredBookings = bookings.find({ start: start, end: end, property: property.id  }) // [Booking1, Booking2, Booking3]
        if filteredBookings.empty:
            filtered_properties.append(property)
return filtered_properties

const properties = []
Property.find({city: location}).then(properties => properties.map(property => {
    Booking.find({ start: start, end: end, property: property.id }).then(bookings => {
        if (booking.length == 0) {
            properties.push(property)
        }
    })
}))

res.json(properties)
 */








