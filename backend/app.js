import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import movieRoute from "./src/routes/movieRoute.js";
import authRoute from "./src/routes/authRoute.js";
import dbConnection from "./src/config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/", movieRoute);
app.use("/", authRoute);

await dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});