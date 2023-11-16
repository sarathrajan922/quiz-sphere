"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const port = 8888;
//server config method
const serverConfig = (server) => {
    const startServer = () => {
        server.listen(port, () => {
            console.log(`server listening on port ${port}`);
        });
    };
    return { startServer };
};
exports.default = serverConfig;
