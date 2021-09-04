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

propertySchema.virtual('likes', {
    ref: 'Like',
    localField: 'id',
    foreignField: 'propertyId',
    justOne: false
});

const Property = mongoose.model('Property', propertySchema)

module.exports = Property