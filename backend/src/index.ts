import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// Casting in typescript to force it as a string
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to database !"));

//Create a new server for express
const app = express();
//Converts request to the API into JSON
app.use(express.json())
app.use(cors())

app.use("/api/my/user", myUserRoute);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});