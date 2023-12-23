import express,{ Request,Response ,Application } from "express";
import {rootRoute} from "./routes/root_route";
import { connectToDatabase } from "./database/connection";

const app:Application = express(); 
const PORT = process.env.PORT || 3777; 

// For testing purposes 
app.get("/", (req:Request, res:Response) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());



app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});