import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import movieRoute from "./src/routes/movieRoute.js";
import authRoute from "./src/routes/authRoute.js";
import dbConnection from "./src/config/db.js";
import cookieParse from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParse());
app.use(cors(
  {origin:(origin, callback)=>{
    if(!origin ||  ['http://localhost:5173', process.env.FRONTEND_URL].includes(origin)){
      return callback(null, true)
    }
    callback(new Error('CORS origin not allowed'))
  },
  credentials:true
},
));
app.use(express.json());

app.get('/health',(req,res)=> res.status(200).json({ok:true}))
app.use("/movies", movieRoute);
app.use("/auth", authRoute);

await dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});