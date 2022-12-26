const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
require('dotenv').config();

const SALT_IT = 10;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type: String,
        required:true,
        trim: true
    },
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    firstName: {
        type: String,
        required:true,
        trim: true,
        maxLength: 200
    },
    lastName: {
        type: String,
        required:true,
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

// this method has direct access to the users that are stored in Mongoose db

userSchema.statics.isEmailTaken = async function(email) {
    //findone is a method that we get on mongoose to double check from the db if that entity exists in db or not
    const user = await this.findOne({email} );
    return !!user;
}

// hash the password with salt

userSchema.pre('save', async function(next) {
    let user = this;
    if(user.isModified('password')) {
        const salt = await bcrypt.genSalt(SALT_IT);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
    }
    next();
    });
    
 userSchema.methods.generateAuthToken = function() {
    let user = this;
    const userObjectDb = {syb: user._id.toHexString(), email: user.email} // obj used to token fy; 
    const token = jwt.sign(userObjectDb, process.env.DB_SECRET_PASSWORD, { expiresIn: '1d'});
    return token;
 }

 // compare password
 userSchema.methods.comparePassword = async function(CandidatePassword) {
    //CandidatePassword = un hashed version of password
    //user.password = db hashed password
    const user = this;
    const match = await bcrypt.compare(CandidatePassword, user.password ); //boolean
    return match;

 }

const User = mongoose.model('User', userSchema );
module.exports = { User };