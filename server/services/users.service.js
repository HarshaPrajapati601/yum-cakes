// edit post , changes to profile
// changes to user that is not authentication
const { User } = require('../models/user');


const findUserByEmail = async (email) => {

    return await User.findOne({email})

}


module.exports = {
    findUserByEmail
}
