const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.model')

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
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;

            return ret
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
        }
    }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property