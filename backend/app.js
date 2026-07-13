import express from "express";
import router from "./src/routes/movieRoute.js";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors())


app.use("/", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});