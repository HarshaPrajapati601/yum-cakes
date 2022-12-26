// a js that returns a fn to reuse the api calls data

//models
const { User } = require('../models/user')

//service
const userService  = require('./users.service')

const createUser = async(email, password, firstName, lastName) => {
    try{
        // 1. check if email does not exist
        if(await User.isEmailTaken(email)) {
            throw new Error("Sorry, email taken");
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
        console.log("the error thrown", error)
    }
}

const signInWithEmailPassword = async (email, password) => {
    try{
        const user = await userService.findUserByEmail(email);
        if(!user) {
            throw new Error('Sorry bad email');
        }
        if (! await user.comparePassword(password)) {
            throw new Error('Sorry bad password');
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