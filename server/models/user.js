const mongoose = require('mongoose');
require('dotnet').config();
const validator = require('validator');
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.email(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 200
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    age: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    },
    verified: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true /// it creates created_at date by default [all server code]
});


const User = mongoose.model('User', userSchema );
module.exports = { User };