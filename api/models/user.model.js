const mongoose = require('mongoose');
const Schema = mongoose.Schema
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^.{8,}$/;
const bcrypt = require('bcrypt');
const categories = require('../data/categories.json')
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
    about: {
        type: String,
        maxLength: 140
    },
    phone: Number,
    identyCard: String,
    city: String,
    reviews: {
        type: Schema.Types.ObjectId,
        ref: "Review"
    },
    interests: {
        type: [{
            type: String,
            enum: Object.keys(categories)
        }]
    },
    messages: {
        type: [String]
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
