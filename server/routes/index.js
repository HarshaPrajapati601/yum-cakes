const express = require('express');
const router = express.Router();

const authRoue = require('./auth.route');

// if the path is /api/auth we will call the authROUTE

const routesIndex = [
    {path: '/auth', route: authRoue}
];

routesIndex.forEach((routes) => {
    // calling the router instance to select the path and file
    router.use(routes.path, routes.route)
})



module.exports = router;