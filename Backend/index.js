import express from "express";//to create server side applications and restful APIs
import mongoose from "mongoose";//to store book info and user info
import dotenv from "dotenv";//used to store sensitive info like port no. and mongoDB URI
import cors from "cors";//middleware to connect and frontend(JS ES6(edition) se phle hum require ka use karte the na ki import)
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());//middleware to parse data coming from body(i.e. during post req from client)
dotenv.config();

const PORT = process.env.PORT || 4000;//by default 4001 i.e. our used port no. will run the app but if it is not available then port 4000 will serve 
const URI = process.env.MongoDBURI;

const dburl=process.env.MongoDBURI;
console.log("MongoDBURI from .env:", dburl);
main().then(()=>{
    console.log("Server is connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(dburl);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

console.log("Hello Rishav");
