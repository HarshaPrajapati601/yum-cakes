
const mongoose =  require('mongoose')
const httpStatus = require('http-status')

// whenever we do new Error we get it from express

class ApiError extends Error {
    constructor(statusCode, message) { //we get from express
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
// so what we want is to use our new ApiError class for throwing errors
//which is a combination of the new properties
//so will create a new handleError method -- > 
// so we want to use the below one to report errors that we get back from our server

const handleError = (err, res) => {
    const { statusCode, message} = err;
    console.log("dftsts", err)
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    })
}

// errors from mongoose or something we don't know
// if we are not going to recognize that it's an instance of api error

const convertToApiError = (err, req, res, next) => {
    let error = err;

    if(!(error instanceof ApiError)) {
        const statusCode = err.statusCode || (err instanceof mongoose.Error ? httpStatus.BAD_REQUEST :
            httpStatus.INTERNAL_SERVER_ERROR );
        const message = err.message || httpStatus[statusCode];

        error = new ApiError(statusCode, message);
    }
    next(error)


}

module.exports = {
     ApiError,handleError, convertToApiError}