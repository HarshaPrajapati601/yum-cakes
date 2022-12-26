// it's just a fn where we pass something and get something

const { authService } = require('../services')
const authController = {
    async test(req, res, next) {
         res.json({ok: 'yes'});
    }
}

module.exports = authController