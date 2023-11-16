"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express and app type
const express_1 = __importDefault(require("express"));
//import morgan for log
const morgan_1 = __importDefault(require("morgan"));
//import cors for resource sharing across other websites
const cors_1 = __importDefault(require("cors"));
const expressConfig = (app) => {
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cors_1.default)({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        // allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
        // exposedHeaders: "X-Custom-Header",
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
};
exports.default = expressConfig;
