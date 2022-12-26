const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');

// if the path is /api/auth we will call the authROUTE

const routesIndex = [
    {path: '/auth', route: authRoute},
];

routesIndex.forEach((routes) => {
    // calling the router instance to select the path and file
    router.use(routes.path, routes.route)
})



module.exports = router;