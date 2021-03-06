const mongoose = require('mongoose');
const Schema = mongoose.Schema
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^.{8,}$/;
const bcrypt = require('bcrypt');
const categories = require('../data/categories.json')
const Booking = require('./booking.model')
const Property = require('./property.model')
const Chat = require('./chat/chat.model')

const userSchema = new Schema({
    name: {
        type: String,
        required: 'An user name is required'
    },
    social: {
        google: String
    },
    email: {
        unique: true,
        type: String,
        required: 'A valid email is required',
        match: [EMAIL_PATTERN, 'the email is invalid']
    },
    password: {
        type: String,
        required: 'A valid password is required',
        match: [PASSWORD_PATTERN, 'the password is invalid']
    },
    avatar: {
        type: String,
        default: function () {
            return "/logo192.png"
        }
    },
    birthday: String,
    about: {
        type: String,
        maxLength: 140
    },
    phone: Number,
    identyCard: String,
    city: String,
    idioms: [String],
    /* reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }] */
    interests: {
        type: [{
            type: String,
            enum: Object.keys(categories)
        }]
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            ret.bookings = doc.bookings || []
            ret.properties = doc.properties || []
            ret.propertiesBookings = doc.propertiesBookings || []

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
            ret.properties = doc.properties || []
            ret.propertiesBookings = doc.propertiesBookings || []
            
            return ret

        }
    }
})


userSchema.virtual('hostBookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'propertyOwner',
    justOne: false
});

userSchema.virtual('guestBookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'guest',
    justOne: false
});

userSchema.virtual('properties', {
    ref: 'Property',
    localField: '_id',
    foreignField: 'owner',
    justOne: false
});
userSchema.virtual('chats', {
    ref: 'Chat',
    localField: '_id',
    foreignField: 'users',
    justOne: false
});
userSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'property',
    justOne: false
});


userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10).then((hash) => {
            this.password = hash;
            next();
        });
    } else {
        next();
    }
});

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
