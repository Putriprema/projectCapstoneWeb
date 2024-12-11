import express from "express";
import cors from "cors";
import UserRoute from"./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.listen(2000, ()=> console.log('server up and running in port 2000....'))