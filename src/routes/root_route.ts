import {Router , Response , Request} from "express";

const rootRoute = Router();

rootRoute.route("/").get((req:Request, res:Response) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
  });
  
  export  {rootRoute};