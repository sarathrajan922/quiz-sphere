"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import userRoutes
//import authRoutes
const demoRouter = (req, res) => {
    console.log(`${req.url} welcome to demo routes...`);
    res.send(`${req.url} welcome to demo routes...`);
};
const routes = (app) => {
    app.use('/api/user', demoRouter);
    // app.use('/api/auth',authRoutes())
    // app.use('/api/user', userRoutes())
};
exports.default = routes;
