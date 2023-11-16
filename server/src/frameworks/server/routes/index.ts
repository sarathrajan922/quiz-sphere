import express,{ Application,Request,Response } from "express";


//import userRoutes
//import authRoutes

const demoRouter = (req: Request, res:Response)=>{
    console.log(`${req.url} welcome to demo routes...`)
    res.send(`${req.url} welcome to demo routes...`)
}

const router = express.Router();
router.get('/demo', demoRouter)

const routes = (app:Application)=>{
    app.use('/api/user', demoRouter)
    // app.use('/api/auth',authRoutes())
    // app.use('/api/user', userRoutes())
}

export default routes;
