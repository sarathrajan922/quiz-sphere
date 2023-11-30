"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import userRoutes
//import authRoutes
const demoRouter = (req, res) => {
    console.log(`${req.url} welcome to demo routes...`);
    res.send(`${req.url} welcome to demo routes...`);
};
const router = express_1.default.Router();
router.get('/demo', demoRouter);
const routes = (app) => {
    app.use('/api/user', demoRouter);
    // app.use('/api/auth',authRoutes())
    // app.use('/api/user', userRoutes())
};
exports.default = routes;
