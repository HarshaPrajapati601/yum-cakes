// a js that returns a fn to reuse the api calls data
const { User } = require('../models/user')

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

module.exports = {
    createUser
}