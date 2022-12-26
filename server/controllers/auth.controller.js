// it's just a fn where we pass something and get something

const { authService } = require('../services')
const authController = {
    async register(req, res, next) {
         try{
            const { email, password, lastName, firstName } = req.body; 
            //Whenever we save the user on the database and we do all the logic, we get a user back.
            const user = await authService.createUser(email, password, firstName, lastName )
            res.json(user);

         } catch(error) {
            console.log("got an", error);
         }
    }
}

module.exports = authController