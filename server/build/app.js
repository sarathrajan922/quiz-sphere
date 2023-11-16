"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express and app type
const express_1 = __importDefault(require("express"));
//import http module
const http_1 = __importDefault(require("http"));
//import server and express config.
const httpServer_1 = __importDefault(require("./frameworks/server/httpServer"));
const expressConfig_1 = __importDefault(require("./frameworks/server/expressConfig"));
//import mongodb connection 
const connection_1 = __importDefault(require("./frameworks/database/mongodb/connection"));
//import routes 
const routes_1 = __importDefault(require("./frameworks/server/routes"));
const app = (0, express_1.default)();
//create server and passing with server config
const server = http_1.default.createServer(app);
const { startServer } = (0, httpServer_1.default)(server);
// calling the all the configurations
(0, expressConfig_1.default)(app);
(0, connection_1.default)();
(0, routes_1.default)(app);
//calling the start server function
startServer();
