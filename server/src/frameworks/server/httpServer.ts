//importing types of server
import { Server } from "http";

const port = 8888;


//server config method

const serverConfig = (server:Server) => {
    const startServer = ()=>{
        server.listen(port,()=>{
            console.log(`server listening on port ${port}`)
        })
    }

    return {startServer}
}

export default serverConfig;