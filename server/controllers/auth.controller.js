// it's just a fn where we pass something and get something
const { authService } = require('../services')
const httpStatus = require('http-status')

const authController = {
    async register(req, res, next) {
         try{
            const { email, password, lastName, firstName } = req.body; 
            //Whenever we save the user on the database and we do all the logic, we get a user back.
            const user = await authService.createUser(email, password, firstName, lastName );
            // jwt token
            const token = await authService.genAuthToken(user);
             // send verification email
             // cookie
            res.cookie('x-access-cookie-token', token)
            .status(httpStatus.CREATED).send({
               user,
               token
            })



         } catch(error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message)
         }
    },
    async signIn(req, res, next) {
      try {
         const { email, password } = req.body; 
           // to check if user is present in db and password is correct
         const user = await authService.signInWithEmailPassword(email, password);
         // create token
         const token = await authService.genAuthToken(user);
         res.cookie('x-access-cookie-token', token).send({
            user,
            token
         })

         //send res back    
      } catch(error) {
         res.status(httpStatus.BAD_REQUEST).send(error.message)
      }


    }
}

module.exports = authController