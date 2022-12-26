// a js that returns a fn to reuse the api calls data

//models
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');
const { User } = require('../models/user')

// middlewares

//service
const userService  = require('./users.service')

const createUser = async(email, password, firstName, lastName) => {
    try{
        // 1. check if email does not exist
        if(await User.isEmailTaken(email)) {
            // throw new Error("Sorry, email taken");
            throw new ApiError(httpStatus.BAD_REQUEST, 'Sorry email is taken')
        }
        //2. Hash the password (pre save)
  
        // 2.  to add user to DB
        const user = new User({
            email,
            password,
            firstName,
            lastName
        }); 
        await user.save();
        return user;
    } catch(error) {
        throw error;
    }
}

const signInWithEmailPassword = async (email, password) => {
    try{
        const user = await userService.findUserByEmail(email);
        if(!user) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Sorry bad email')
        }
        if (! await user.comparePassword(password)) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Sorry bad password')
        }
        return user;
    
    } catch(e) {
       throw e
    }

}

const genAuthToken = (user) =>{
    const token =  user.generateAuthToken();
    return token;
}

module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailPassword
}