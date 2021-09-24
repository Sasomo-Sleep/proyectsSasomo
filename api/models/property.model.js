const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.model')
const Review = require('./review.model')
const Like = require('./like.model')
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
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            ret.bookings = doc.bookings || []
            ret.location = doc.location.coordinates?.reverse() || []
            return ret
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            ret.bookings = doc.bookings || []
            return ret
        }
    }
})
propertySchema.index({ location: '2dsphere' });

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

propertySchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'property',
    justOne: false
});

propertySchema.pre('remove', function(next) {
    Like.remove({propertyId: this._id}).exec();
    next();
});


const Property = mongoose.model('Property', propertySchema)

module.exports = Property