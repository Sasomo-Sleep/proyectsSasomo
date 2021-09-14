const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.model')
const Review = require('./review.model')
const propertySchema = new Schema({

    name: String,
    rooms: Number,
    price: Number,
    bathroom: Number,
    description: String,
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    },
    images: [String],
    maxGuests: Number,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: {
            type: String,
            ref: 'Review'
        }
    }]
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            ret.bookings = doc.bookings || []

            return ret
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            ret.bookings = doc.bookings || []
            return ret
        }
    }
})

propertySchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'propertyId',
    justOne: false
});
propertySchema.virtual('bookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'property',
    justOne: false
});

const Property = mongoose.model('Property', propertySchema)

module.exports = Property